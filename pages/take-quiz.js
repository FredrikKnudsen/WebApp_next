import { useState, useEffect } from 'react';
import axios from 'axios';

const TakeQuiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [userScore, setUserScore] = useState(0);

  const getQuiz = async () => {
    try {
      const response = await axios.get('/api/quiz'); 
      if (response.status === 200) {
        setQuiz(response.data);
        const initialAnswers = {};
        response.data.questions.forEach((question) => {
          initialAnswers[question.id] = '';
        });
        setUserAnswers(initialAnswers);
      }
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleAnswerSubmission = (questionId, selectedOption) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: selectedOption,
    });
  };

  const handleSubmitAnswers = () => {
    let score = 0;
    quiz.questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        score++;
      }
    });

    setUserScore(score);
    setShowResults(true);
  };
  

  return (
    <div>
      <h1>Basketball Quiz</h1>
      {quiz ? (
        quiz.questions.map((question) => (
          <div key={question.id}>
            <p>{question.question}</p>
            <ul>
              {question.options.map((option) => (
                <li key={option}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={userAnswers[question.id] === option}
                      onChange={() => handleAnswerSubmission(question.id, option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>Loading quiz data...</p>
      )}

      <button onClick={handleSubmitAnswers}>Submit Answers</button>

      {showResults && (
        <div>
          <h2>Quiz Results</h2>
          <p>You scored: {userScore} out of {quiz.questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default TakeQuiz;