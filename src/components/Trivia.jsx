import { useEffect, useState } from "react";

export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [gameWon, setGameWon] = useState(false);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [isFiftyFiftyUsed, setIsFiftyFiftyUsed] = useState(false);
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);
  const [phoneAFriendUsed, setPhoneAFriendUsed] = useState(false);
  const [audienceUsed, setAudienceUsed] = useState(false);
  const [audienceAnswer, setAudienceAnswer] = useState(null);
  useEffect(() => {
    // Get a random question that hasn't been asked before
    const getRandomQuestion = () => {
      const unansweredQuestions = data.filter(
        (question) => !askedQuestions.includes(question.id)
      );
      const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
      return unansweredQuestions[randomIndex];
    };

    // Set the current question
    setCurrentQuestion(getRandomQuestion());
  }, [data, askedQuestions]);

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    setTimeout(() => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
      setTimeout(() => {
        if (a.correct) {
          if (questionNumber >= 15) {
            // Last question - game over
            setTimeout(() => {
              setGameWon(true);
            }, 1000);
          } else {
            // Next question
            setAskedQuestions((prev) => [...prev, currentQuestion.id]);
            setTimeout(() => {
              setQuestionNumber((prev) => prev + 1);
              setSelectedAnswer(null);
            }, 0);
          }
        } else {
          // Wrong answer - game over
          setTimeout(() => {
            setTimeOut(true);
          }, 1000);
        }
      }, 500);
    }, 3000);
  };
  
  const fiftyFifty = () => {
    if (!selectedAnswer && !isFiftyFiftyUsed) {
      // Select 2 random incorrect answers to remove
      const incorrectAnswers = currentQuestion.answers.filter((a) => !a.correct);
      const randomIndex1 = Math.floor(Math.random() * incorrectAnswers.length);
      let randomIndex2;
      do {
        randomIndex2 = Math.floor(Math.random() * incorrectAnswers.length);
      } while (randomIndex2 === randomIndex1);
      const removedAnswers = [        incorrectAnswers[randomIndex1],
        incorrectAnswers[randomIndex2],
      ];
      // Update the question with removed answers
      setCurrentQuestion((prev) => {
        const updatedAnswers = prev.answers.filter(
          (a) => a.correct || removedAnswers.indexOf(a) === -1
        );
        return { ...prev, answers: updatedAnswers };
      });
      setIsFiftyFiftyUsed(true);
    }
  };
  const phoneAFriend = () => {
    if (!phoneAFriendUsed) {
      setPhoneAFriendUsed(true);
      // Update the question with friend's response
      setCurrentQuestion((prev) => {
        const friendResponse = prev.answers.find((a) => a.correct);
        const updatedAnswers = prev.answers.map((a) =>
          a.correct || a === friendResponse ? a : { ...a, text: "-" }
        );
        return { ...prev, answers: updatedAnswers };
      });
    }
  };
 
  const askTheAudience = () => {
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 4));
    setAudienceAnswer(randomLetter);
    setAudienceUsed(true);
  };

  return (
    <div className="trivia">
      <div className="question">{currentQuestion?.question}</div>
      <div className="answers">
        {currentQuestion?.answers.map((a) => (
          <div
            key={a.id}
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
      <div className="lifelines">
        <button disabled={fiftyFiftyUsed} onClick={fiftyFifty}>
          50/50
        </button>
        <button disabled={phoneAFriendUsed} onClick={phoneAFriend}>
          Phone a friend
        </button>
        <button disabled={audienceUsed} onClick={askTheAudience}>
          Ask the audience
        </button>
      </div>
      {gameWon && (
        <div className="message">
          <h2>Congratulations! You have won a million dollars!</h2>
        </div>
      )}
      {audienceAnswer && (
        <div className="audience-answer">
          Audience says: {audienceAnswer}
        </div>
      )}
    </div>
  );
}
  
