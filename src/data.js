const data = [
    {
      id: 1,
      question: "Which of these animes is the oldest",
      answers: [
        {
          text: "Attack on Titan",
          correct: false,
        },
        {
          text: "Sword Art Online",
          correct: true,
        },
        {
          text: "Tokyo Ghoul",
          correct: false,
        },
        {
          text: "One Punch man",
          correct: false,
        },
      ],
    },
    {
        id: 2,
        question: "Which anime was the first to win an Academy Award?",
        answers: [
          {
            text: "Spirited Away",
            correct: true,
          },
          {
            text: "Your Name",
            correct: false,
          },
          {
            text: "Grave of the Fireflies",
            correct: false,
          },
          {
            text: "Akira",
            correct: false,
          },
        ],
      },
      {
        id: 3,
        question: "What is the name of the final boss in Sword Art Online?",
        answers: [
          {
            text: "Heathcliff",
            correct: true,
          },
          {
            text: "Kirito",
            correct: false,
          },
          {
            text: "Asuna",
            correct: false,
          },
          {
            text: "Yui",
            correct: false,
          },
        ],
      },
      {
        id: 4,
        question: "What is the name of the character who serves as a scout for the Survey Corps in Attack on Titan?",
        answers: [
          {
            text: "Mikasa Ackerman",
            correct: false,
          },
          {
            text: "Levi Ackerman",
            correct: true,
          },
          {
            text: "Eren Yeager",
            correct: false,
          },
          {
            text: "Armin Arlert",
            correct: false,
          },
        ],
      },
      {
        id: 5,
        question: "Which anime features a character named Light Yagami, who finds a supernatural notebook that can kill anyone whose name is written in it?",
        answers: [
          {
            text: "Death Note",
            correct: true,
          },
          {
            text: "Code Geass",
            correct: false,
          },
          {
            text: "Fullmetal Alchemist",
            correct: false,
          },
          {
            text: "Cowboy Bebop",
            correct: false,
          },
        ],
      },
      {
        id: 6,
        question: "What is the name of the powerful guild in Fairy Tail that Natsu and his friends belong to?",
        answers: [
          {
            text: "Lamia Scale",
            correct: false,
          },
          {
            text: "Blue Pegasus",
            correct: false,
          },
          {
            text: "Fairy Tail",
            correct: true,
          },
          {
            text: "Sabertooth",
            correct: false,
          },
        ],
      },
      {
        id: 7,
        question: "What is the name of the main character in One Piece?",
        answers: [
          {
            text: "Monkey D. Luffy",
            correct: true,
          },
          {
            text: "Roronoa Zoro",
            correct: false,
          },
          {
            text: "Nami",
            correct: false,
          },
          {
            text: "Sanji",
            correct: false,
          },
        ],
      },
      {
        id: 8,
        question: "What is the name of the magical school that the characters attend in Little Witch Academia?",
        answers: [
          {
            text: "Luna Nova Academy",
            correct: true,
          },
          {
            text: "Witching School",
            correct: false,
          },
          {
            text: "Magic Academy",
            correct: false,
          },
          {
            text: "Sorcery School",
            correct: false,
         },
        ],
    },
    {
    id: 9,
    question: "What is the name of the organization that the main characters in Black Butler work for?",
    answers: [
    {
    text: "Phantomhive",
    correct: false,
    },
    {
    text: "Angels of Death",
    correct: false,
    },
    {
    text: "Grim Reapers",
    correct: false,
    },
    {
    text: "Queen's Watchdog",
    correct: true,
    },
    ],
    },
    {
    id: 10,
    question: "In Naruto, what is the name of the character who can turn his body into sand?",
    answers: [
    {
    text: "Gaara",
    correct: true,
    },
    {
    text: "Kankuro",
    correct: false,
    },
    {
    text: "Temari",
    correct: false,
    },
    {
    text: "Sasori",
    correct: false,
    },
    ],
    },
    {
    id: 11,
    question: "What is the name of the organization that tries to capture the legendary pirate Gol D. Roger in One Piece?",
    answers: [
    {
    text: "World Government",
    correct: false,
    },
    {
    text: "Marine",
    correct: false,
    },
    {
    text: "Bounty Hunters",
    correct: false,
    },
    {
    text: "Roger Pirates",
    correct: true,
    },
    ],
    },
    {
    id: 12,
    question: "What is the name of the virtual world that the characters in Sword Art Online are trapped in?",
    answers: [
    {
    text: "Aincrad",
    correct: true,
    },
    {
    text: "Alfheim",
    correct: false,
    },
    {
    text: "Gun Gale",
    correct: false,
    },
    {
    text: "Ordinal Scale",
    correct: false,
    },
    ],
    },
    {
    id: 13,
    question: "In Fullmetal Alchemist, what is the name of the young girl who can transform into a dog?",
    answers: [
    {
    text: "May Chang",
    correct: false,
    },
    {
    text: "Lust",
    correct: false,
    },
    {
    text: "Rose",
    correct: false,
    },
    {
    text: "Nina Tucker",
    correct: true,
    },
    ],
    },
    {
    id: 14,
    question: "What is the name of the Death Weapon in Soul Eater?",
    answers: [
    {
    text: "Death Scythe",
    correct: false,
    },
    {
    text: "Tsubaki Nakatsukasa",
    correct: false,
    },
    {
    text: "Maka Albarn",
    correct: false,
    },
    {
    text: "Soul Evans",
    correct: true,
    },
    ],
    },
    {
    id: 15,
    question: "What is the name of the magical girl who fights witches in Puella Magi Madoka Magica?",
    answers: [
    {
    text: "Mami Tomoe",
    correct: true,
    },
    {
    text: "Kyoko Sakura",
    correct: false,
    },
    {
    text: "Homura Akemi",
    correct: false,
    },
    {
    text: "Sayaka Miki",
    correct: false,
    },
    ],
    },
    {
    id: 16,
    question: "What is the nameof the organization that employs the characters in Psycho-Pass?",
    answers: [
    {
    text: "Public Security Bureau",
    correct: true,
    },
    {
    text: "Criminal Investigation Division",
    correct: false,
    },
    {
    text: "Ministry of Welfare",
    correct: false,
    },
    {
    text: "Judiciary Police",
    correct: false,
    },
    ],
    },
    {
    id: 17,
    question: "What is the name of the high school that the characters attend in Ouran High School Host Club?",
    answers: [
    {
    text: "Seika High School",
    correct: false,
    },
    {
    text: "Hakusenkan High School",
    correct: false,
    },
    {
    text: "St. Lobelia Girls' Academy",
    correct: false,
    },
    {
    text: "Ouran Academy",
    correct: true,
    },
    ],
    },
    {
    id: 18,
    question: "In Death Note, what is the name of the detective who is trying to catch Kira?",
    answers: [
    {
    text: "L",
    correct: true,
    },
    {
    text: "Mello",
    correct: false,
    },
    {
    text: "Near",
    correct: false,
    },
    {
    text: "Light",
    correct: false,
    },
    ],
    },
    {
    id: 19,
    question: "What is the name of the ninja village that the characters in Naruto come from?",
    answers: [
    {
    text: "Konohagakure",
    correct: true,
    },
    {
    text: "Sunagakure",
    correct: false,
    },
    {
    text: "Kirigakure",
    correct: false,
    },
    {
    text: "Iwagakure",
    correct: false,
    },
    ],
    },
    {
    id: 20,
    question: "What is the name of the fictional sport that the characters play in Inazuma Eleven?",
    answers: [
    {
    text: "Soccer",
    correct: false,
    },
    {
    text: "Basketball",
    correct: false,
    },
    {
    text: "Football",
    correct: false,
    },
    {
    text: "Inazuma Eleven",
    correct: true,
    },
    ],
    },
    {
    id: 21,
    question: "What is the name of the organization that trains assassins in Akame ga Kill?",
    answers: [
    {
    text: "Night Raid",
    correct: false,
    },
    {
    text: "Jaegers",
    correct: false,
    },
    {
    text: "Empire",
    correct: false,
    },
    {
    text: "The Revolutionary Army",
    correct: true,
    },
    ],
    },
    {
    id: 22,
    question: "What is the name of the special power that the characters in My Hero Academia possess?",
    answers: [
    {
    text: "Nen",
    correct: false,
    },
    {
    text: "Haki",
    correct: false,
    },
    {
    text: "Chakra",
    correct: false,
    },
    {
    text: "Quirk",
    correct: true,
    },
    ],
    },
    {
    id: 23,
    question: "What is the name of the virtual world in Accel World?",
    answers: [
    {
    text: "Sword Art Online",
    correct: false,
    },
    {
    text: "The World",
    correct: false,
    },
    {
    text: "Brain Burst",
    correct: true,
    },
    {
    text: "Alfheim Online",
    correct: false,
    },
    ],
    },
    {
    id: 24,
    question: "In Fullmetal Alchemist, what is the name of the military force that the main characters belong to?",
    answers: [
    {
    text: "State Alchemists",
    correct: true,
    },
    {
    text: "Imperial Army",
    correct: false,
    },
    {
    text: "National Guard",
    correct: false,
    },
    {
    text: "Royal Army",
    correct: false,
    },
    ],
    },
    {
    id: 25,
    question: "What is the name of the character who wears a gas mask in Code Geass?",
    answers: [
    {
    text: "Suzaku Kururugi",
    correct: false,
    },
    {
    text: "Lelouch vi Britannia",
    correct: false,
    },
    {
    text: "Jeremiah Gottwald",
    correct: false,
    },
    {
    text: "C.C.",
    correct: true,
    },
    ],
    },
    {
    id: 26,
    question: "What is the name of the weapon that the characters use to fight Titans in Attack on Titan?",
    answers: [
    {
    text: "Sword",
    correct: false,
    },
    {
    text: "Gun",
    correct: false,
    },
    {
    text: "3D Maneuver Gear",
    correct: true,
    },
    {
    text: "Bow",
    correct: false,
    },
    ],
    },
    {
    id: 27,
    question: "What is the name of the virtual reality game that the characters in Sword Art Online play?",
    answers: [
    {
    text: "Gun Gale Online",
    correct: false,
    },
    {
    text: "Alfheim Online",
    correct: false,
    },
    {
    text: "Sword Art Online",
    correct: true,
    },
    {
    text: "Ordinal Scale",
    correct: false,
    },
    ],
    },
    {
    id: 28,
    question: "What is the name of the organization that the characters in Full Metal Panic belong to?",
    answers: [
    {
    text: "Mithril",
    correct: true,
    },
    {
    text: "Amalgam",
    correct: false,
    },
    {
    text: "Black Knights",
    correct: false,
    },
    {
    text: "Celestial Being",
    correct: false,
    },
    ],
    },
    {
    id: 29,
    question: "What is the name of the island where the characters in One Piece are searching for the legendary treasure?",
    answers: [
    {
    text: "Dressrosa",
    correct: false,
    },
    {
    text: "Marineford",
    correct: false,
    },
    {
    text: "Whole Cake Island",
    correct: false,
    },
    {
    text: "Laugh Tale",
    correct: true,
    },
    ],
    },
    {
    id: 30,
    question: "What is the name of the main character in Death Parade?",
    answers: [
    {
    text: "Decim",
    correct: true,
    },
    {
    text: "Chiyuki",
    correct: false,
    },
    {
    text:"Ginti",
        correct: false,
      },
      {
        text: "Nona",
        correct: false,
      },
    ],
    },
    {
    id: 31,
    question: "In Naruto, what is the name of the legendary Sannin who has a medical ninja as a protégé?",
    answers: [
    {
    text: "Orochimaru",
    correct: false,
    },
    {
    text: "Jiraiya",
    correct: false,
    },
    {
    text: "Tsunade",
    correct: true,
    },
    {
    text: "Kabuto Yakushi",
    correct: false,
    },
    ],
    },
    {
    id: 32,
    question: "In the anime series Clannad, what is the name of the main character who befriends a girl named Nagisa Furukawa?",
    answers: [
    {
    text: "Tomoya Okazaki",
    correct: true,
    },
    {
    text: "Kouhei Inuzuka",
    correct: false,
    },
    {
    text: "Junpei Kousaka",
    correct: false,
    },
    {
    text: "Takashi Natsume",
    correct: false,
    },
    ],
    },
    {
    id: 33,
    question: "What is the name of the special unit in the anime series Psycho-Pass that is responsible for investigating cases related to the Sybil System?",
    answers: [
    {
    text: "Public Safety Bureau Division 3",
    correct: false,
    },
    {
    text: "Criminal Investigation Division",
    correct: false,
    },
    {
    text: "Special Investigations Department",
    correct: true,
    },
    {
    text: "Forensics Investigation Department",
    correct: false,
    },
    ],
    },
    {
    id: 34,
    question: "What is the name of the female character who has a crush on the protagonist in Toradora!?",
    answers: [
    {
    text: "Taiga Aisaka",
    correct: true,
    },
    {
    text: "Minori Kushieda",
    correct: false,
    },
    {
    text: "Ami Kawashima",
    correct: false,
    },
    {
    text: "Sumire Kanou",
    correct: false,
    },
    ],
    },
    {
    id: 35,
    question: "In the anime series Tengen Toppa Gurren Lagann, what is the name of the giant mecha that the characters pilot?",
    answers: [
    {
    text: "Gurren",
    correct: true,
    },
    {
    text: "Lagann",
    correct: false,
    },
    {
    text: "Gunmen",
    correct: false,
    },
    {
    text: "Arc-Gurren",
    correct: false,
    },
    ],
    },
    {
    id: 36,
    question: "What is the name of the character who is considered the strongest hero in the anime series One Punch Man?",
    answers: [
    {
    text: "Genos",
    correct: false,
    },
    {
    text: "Mumen Rider",
    correct: false,
    },
    {
    text: "Blast",
    correct: false,
    },
    {
    text: "Saitama",
    correct: true,
    },
    ],
    },
    {
    id: 37,
    question: "What is the name of the game that the characters in the anime series No Game No Life play in order to become the god of all games?",
    answers: [
    {
    text: "Dungeon",
    correct: false,
    },
    {
    text: "Tetris",
    correct: false,
    },
    {
    text: "Chess",
    correct: false,
    },
    {
    text: "Blank",
    correct: true,
    },
    ],
    },
    {
    id: 38,
    question: "In the anime series Death Note, what is the name of the detective who is trying to catch Kira?",
    answers: [
    {
    text: "Soichiro Yagami",
    correct: true,
    },
    {
    text: "L Lawliet",
    correct: false,
    },
    {
    text: "Nate River",
    correct: false,
    },
    {
    text: "Teru Mikami",
    correct: false,
    },
    ],
    },
    {
    id: 39,
    question: "What is the name of the character who is considered the strongest mage in the anime series Fairy Tail?",
    answers: [
    {
    text: "Erza Scarlet",
    correct: false,
    },
    {
    text: "Gray Fullbuster",
    correct: false,
    },
    {
    text: "Natsu Dragneel",
    correct: false,
    },
    {
    text: "Gildarts Clive",
    correct: true,
    },
    ],
    },
    {
    id: 40,
    question: "In the anime series Fullmetal Alchemist: Brotherhood, what is the name of the metal used to create automail prosthetics?",
    answers: [
    {
    text: "Titanium",
    correct: false,
    },
    {
    text: "Silver",
    correct: false,
    },
    {
    text: "Gold",
    correct: false,
    },
    {
    text: "Steel",
    correct: true,
    },
    ],
    },
    {
    id: 41,
    question: "What is the name of the character who is known as the 'King of Heroes' in the anime series Fate/Zero?",
    answers: [
    {
    text: "Gilgamesh",
    correct: true,
    },
    {
    text: "Saber",
    correct: false,
    },
    {
    text: "Archer",
    correct: false,
    },
    {
    text: "Rider",
    correct: false,
    },
    ],
    },
    {
    id: 42,
    question: "In the anime series Cowboy Bebop, what is the name of the main character who is a bounty hunter?",
    answers: [
    {
    text: "Spike Spiegel",
    correct: true,
    },
    {
    text: "Jet Black",
    correct: false,
    },
    {
    text: "Faye Valentine",
    correct: false,
    },
    {
    text: "Edward Wong Hau Pepelu Tivrusky IV",
    correct: false,
    },
    ],
    },
    {
    id: 43,
    question: "What is the name of the device that the characters use to summon their Servants in the anime series Fate/Stay Night?",
    answers: [
    {
    text: "Noble Phantasm",
    correct: false,
    },
    {
    text: "Command Seal",
    correct: true,
    },
    {
    text: "Excalibur",
    correct: false,
    },
    {
    text: "Holy Grail",
    correct: false,
    },
    ],
    },
    {
    id: 44,
    question: "In the anime series Attack on Titan, what is the name of the protagonist?",
    answers: [
    {
    text: "Levi Ackerman",
    correct: false,
    },
    {
    text: "Eren Jaeger",
    correct: true,
    },
    {
    text: "Mikasa Ackerman",
    correct: false,
    },
    {
    text: "Armin Arlert",
    correct: false,
    },
    ],
    },
    {
    id: 45,
    question: "In the anime series Naruto, what is the name of the main character's rival?",
    answers: [
    {
    text: "Sasuke Uchiha",
    correct: true,
    },
    {
    text: "Kakashi Hatake",
    correct: false,
    },
    {
    text: "Itachi Uchiha",
    correct: false,
    },
    {
    text: "Minato Namikaze",
    correct: false,
    },
    ],
    },
    {
    id: 46,
    question: "In the anime series Bleach, what is the name of the main character who becomes a Soul Reaper?",
    answers: [
    {
    text: "Ichigo Kurosaki",
    correct: true,
    },
    {
    text: "Rukia Kuchiki",
    correct: false,
    },
    {
    text: "Toshiro Hitsugaya",
    correct: false,
    },
    {
    text: "Kenpachi Zaraki",
    correct: false,
    },
    ],
    },
    {
    id: 47,
    question: "In the anime series One Piece, what is the name of the captain of the Straw Hat Pirates?",
    answers: [
    {
    text: "Monkey D. Luffy",
    correct: true,
    },
    {
    text: "Roronoa Zoro",
    correct: false,
    },
    {
    text: "Nami",
    correct: false,
    },
    {
    text: "Sanji",
    correct: false,
    },
    ],
    },
    {
    id: 48,
    question: "In the anime series Hunter x Hunter, what is the name of the main character's father?",
    answers: [
    {
    text: "Ging Freecss",
    correct: true,
    },
    {
    text: "Isaac Netero",
    correct: false,
    },
    {
    text: "Hisoka Morow",
    correct: false,
    },
    {
    text: "Chrollo Lucilfer",
    correct: false,
    },
    ],
    },
    {
    id: 49,
    question: "In the anime series Code Geass, what is the name of the main character who gains the power of Geass?",
    answers: [
    {
    text: "Lelouch Lamperouge",
    correct: true,
    },
    {
    text: "Suzaku Kururugi",
    correct: false,
    },
    {
    text: "C.C.",
    correct: false,
    },
    {
    text: "Kallen Stadtfeld",
    correct: false,
    },
    ],
    },
    {
    id: 50,
    question: "In the anime series JoJo's Bizarre Adventure, what is the name of the main character of Part 3?",
    answers: [
    {
    text: "Jonathan Joestar",
    correct: false,
    },
    {
    text: "Joseph Joestar",
    correct: false,
    },
    {
    text: "Jotaro Kujo",
    correct: true,
    },
    {
    text: "Josuke Higashikata",
    correct: false,
    },
    ],
    },
    ];
    
