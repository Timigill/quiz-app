"use client";  // Ensure this is added if you're using client-side features like hooks
import '@/app/globals.css';
import React from "react";

export default function Home() {
  const navigateToQuiz = () => {
    window.location.href = "/quiz"; // Manually navigate to the quiz page
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh", // Full viewport height
      backgroundColor: "black", // Use CSS variable for background
      color: "var(--foreground)", // Use CSS variable for text color
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
    }}>
      <h1 style={{
        color: "white", // Use CSS variable for primary color
        fontSize: "2.5rem",
        marginBottom: "20px",
        fontFamily: "'Helvetica', sans-serif",
      }}>
        Welcome to the Quiz App
      </h1>
      <button
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: "var(--primary)", // Use CSS variable for primary color
          color: "white",
          border: "1px solid ",
          borderRadius: "5px",
          transition: "background-color 0.3s ease, transform 0.2s ease",
        }}
        onClick={navigateToQuiz}  // Use the custom navigation function
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.color = "black"; // Change text color to black (or any other color)
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--primary)";
          e.currentTarget.style.color = "white"; // Reset text color to white
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
