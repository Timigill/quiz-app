const flirtyQuestions = [
  {
    question: "What’s the best way to win my heart?",
    options: ["Flowers", "Chocolate", "Your smile", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "If we were on a date, where would you take me?",
    options: ["A fancy restaurant", "A cozy coffee shop", "A sunset picnic", "Anywhere, as long as it’s with you"],
    answer: "Anywhere, as long as it’s with you",
  },
  {
    question: "What’s your favorite thing about me?",
    options: ["Your eyes", "Your laugh", "Your sense of humor", "Everything"],
    answer: "Everything",
  },
  {
    question: "What’s the most romantic thing you’ve ever done?",
    options: ["Written a love letter", "Planned a surprise date", "Stargazed all night", "Still waiting for the right person"],
    answer: "Still waiting for the right person",
  },
  {
    question: "If you could describe me in one word, what would it be?",
    options: ["Irresistible", "Charming", "Breathtaking", "Perfect"],
    answer: "Perfect",
  },
  {
    question: "What’s your idea of a perfect date?",
    options: ["Dinner and a movie", "A walk on the beach", "Netflix and chill", "Anything with you"],
    answer: "Anything with you",
  },
  {
    question: "What’s the first thing you noticed about me?",
    options: ["Your smile", "Your eyes", "Your confidence", "Your vibe"],
    answer: "Your smile",
  },
  {
    question: "If we were stranded on a deserted island, what’s the one thing you’d bring?",
    options: ["A knife", "A book", "A radio", "Me"],
    answer: "Me",
  },
  {
    question: "What’s your favorite love song?",
    options: ["Thinking Out Loud - Ed Sheeran", "Perfect - Ed Sheeran", "All of Me - John Legend", "Our song"],
    answer: "Our song",
  },
  {
    question: "What’s the most romantic thing you’d do for me?",
    options: ["Write you a poem", "Sing you a song", "Cook you dinner", "Whatever makes you happiest"],
    answer: "Whatever makes you happiest",
  },
];

// Define TypeScript types
interface Question {
  question: string;
  options: string[];
  answer: string;
}

// Fisher-Yates shuffle algorithm with proper TypeScript typing
const shuffleArray = (array: string[]): string[] => {
  const newArray = [...array]; // Clone array to prevent mutation
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Shuffle options for each question without modifying the original structure
const shuffledFlirtyQuestions: Question[] = flirtyQuestions.map((question) => ({
  ...question,
  options: shuffleArray(question.options),
}));

export default shuffledFlirtyQuestions;
