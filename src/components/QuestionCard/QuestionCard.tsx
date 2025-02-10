import React from "react";
import "./QuestionCard.css"; // Import styles for the component
import '@/app/globals.css';
type QuestionCardProps = {
  question: {
    question: string;
    options: string[];
    answer: string;
  };
  onAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  answered: boolean;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  selectedAnswer,
  answered,
}) => {
  return (
    <div className="question-card">
      <h2 className="question">{question.question}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option ${
              answered
                ? option === question.answer
                  ? "correct"
                  : selectedAnswer === option
                  ? "incorrect"
                  : ""
                : ""
            }`}
            style={{
              backgroundColor:
                answered && option === question.answer
                  ? "#d4edda" // Green for correct answer
                  : answered && selectedAnswer === option
                  ? "#f8d7da" // Red for incorrect answer
                  : index % 2 === 0
                  ? "" // Light blue for even rows
                  : "", // Light yellow for odd rows
                  
            }}
            disabled={answered}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
