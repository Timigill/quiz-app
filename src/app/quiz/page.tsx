"use client";

import { useState } from "react";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import questions from "../../data/questions";
import '@/app/globals.css';

import '@/app/quiz/quiz.css';
const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answer: string) => {
    if (answered) return;

    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    setAnswered(true);
    setSelectedAnswer(answer);

    if (currentQuestionIndex + 1 < questions.length) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswered(false);
        setSelectedAnswer(null);
      }, 1000);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setQuizCompleted(false);
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 className="head">Quiz App</h1>
        <h2 className="Score">Score: {score} / {questions.length}</h2>
      </div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h3 className="question-count">
          Question {currentQuestionIndex + 1} / {questions.length}
        </h3>
      </div>
      {!quizCompleted ? (
        <QuestionCard
          question={questions[currentQuestionIndex]} // Pass the full question object
          onAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
          answered={answered}
        />
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Quiz Completed!</h2>
          <h3 className="fscore">Your Final Score: {score} / {questions.length}</h3>
          <button
            onClick={handleRestart}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              marginTop: "20px",
              cursor: "pointer"
              ,
              border: "2px",
              borderRadius: "5px",
              color: "white",
              backgroundColor: "black",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "black"; // Change text color to black (or any other color)
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "black";
              e.currentTarget.style.color = "white"; // Reset text color to white
            }}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
