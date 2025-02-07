export interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
  }
  
  export interface QuizResult {
    correctAnswers: number;
    totalQuestions: number;
  }
  