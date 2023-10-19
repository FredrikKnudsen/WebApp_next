import { useState, useEffect } from 'react';
import axios from 'axios';

const quizQuestions = [
  {
    id: 4,
    question: 'Who was the #1 overall draft pick in the 2023 NBA draft?',
    options: ['Ausar Thompson', 'Scoot Henderson', 'Amen Thompson', 'Victor Wembanyama'],
    correctAnswer: 'Victor Wembanyama',
  },
  {
    id: 5,
    question: 'Which college basketball program did Michael Jeffrey Jordan attend?',
    options: ['Kentucky', 'UNC', 'Duke', 'UCLA'],
    correctAnswer: 'UNC',
  },
  {
    id: 6,
    question: 'Who is the highest paid player in the NBA, earning $51,915,615 in the 2023-24 NBA season?',
    options: ['Stephen Curry', 'LeBron James', 'Joel Embiid', 'Nikola Jokic'],
    correctAnswer: 'Stephen Curry',
  },
];

export default sendQuizQuestions = async () => {
  try {
    const response = await axios.post('/api/quiz', { quizQuestions })
    if (response.data.success) {
      console.log('Quiz questions sent successfully');
    }
  } catch (error) {
    console.error('Error sending quiz questions:', error);
  }
  useEffect(() => {
  sendQuizQuestions();
}, []);
};