"use client"
import { useState } from 'react';
import styles from './feedback.module.css';
import { getSession, signIn } from "next-auth/react";

const handleSubmit =  (event) => {
    debugger
    event.preventDefault();
    
    const { data: session} = getSession();
    if (session) {
        // User is already signed in, submit comment
        submitComment(comment);
    } else {
        // Trigger Google sign-in
        try {
             signIn("google");
            
        } catch (error) {
            console.log(error)
        }
        // submitComment(comment);
    }
};

const submitComment =  (comment) => {
    // Access user information from session (assuming stored after sign-in)
    const session =  getSession();
    const user = session.user;
    
    // Send comment data (comment, user.name, user.email, user.image) to your server for storage
    const response =  fetch("/api/submit-comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment, name: user.name, email: user.email, image: user.image }),
    });
    
    if (response.ok) {
        // setComment(""); // Clear comment after successful submission
        alert("Comment submitted successfully!");
    } else {
        alert("Error submitting comment. Please try again.");
    }
};

export default function FeedBacks() {
    const [comment, setComment] = useState("");
    return (
        <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            name="" onChange={(e) => setComment(e.target.value)}
            placeholder="Message"/
          >
          <button type='submit'>Send</button>
        </form>
      </div>
    );
  }