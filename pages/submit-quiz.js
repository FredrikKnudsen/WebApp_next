import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const SubmitQuiz = () => {
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewQuestion({
      ...newQuestion,
      [name]: value,
    });
  };

  const handleOption = (index, e) => {
    const newOptions = [...newQuestion.options];
    newOptions[index] = e.target.value;
    setNewQuestion({
      ...newQuestion,
      options: newOptions,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/quiz', newQuestion);
      if (response.status === 201) {
        console.log('Quiz question created');
      }
    } catch (error) {
      console.error('Error submitting quiz question:', error);
    }
  };

  return (
    <div>
        <Link href="/">
            <button>Home</button>
        </Link>
        <p></p>
        <Link href="/take-quiz">
            <button>Take a Quiz Page</button>
        </Link>
        <h1>Submit a Quiz Question</h1>
        <form>
        <label>
            Question:
            <input
                type="text"
                name="question"
                value={newQuestion.question}
                onChange={handleInput}
            />
            </label>

            <p>Options:</p>
            {newQuestion.options.map((option, index) => (
            <label key={index}>
                Option {index + 1}:
                <input
                type="text"
                name={`option-${index}`}
                value={option}
                onChange={(e) => handleOption(index, e)}
                />
            </label>
            ))}

            <label>
            Correct Answer:
            <select
                name="correctAnswer"
                value={newQuestion.correctAnswer}
                onChange={handleInput}
                >   
                {newQuestion.options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
                ))}
            </select>
            </label>

            <button type="button" onClick={handleSubmit}>
            Submit Question
            </button>
        </form>
        </div>
  );
};

export default SubmitQuiz;