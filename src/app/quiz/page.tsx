"use client";

import { useState } from "react";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import questions from "../../data/questions";
import '@/app/globals.css';
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
        <h2>Score: {score} / {questions.length}</h2>
      </div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h3>
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
          <h3>Your Final Score: {score} / {questions.length}</h3>
          <button
            onClick={handleRestart}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              marginTop: "20px",
              cursor: "pointer",
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
