const questions = [
  {
    id: 1,
    question: 'Who was known as "The Black Mamba"?',
    options: ['LeBron James', 'Stephen Curry', 'Kobe Bryant', 'Kevin Durant'],
    correctAnswer: 'Kobe Bryant',
  },
  {
    id: 2,
    question: 'Who is the NBA all time leading scorer?',
    options: ['Lebron James', 'Kobe Bryant', 'Kareem Abdul-Jabbar', 'Stephen Curry'],
    correctAnswer: 'Lebron James',
  },
  {
    id: 3,
    question: 'Which player holds the record for the most points scored in a single NBA game?',
    options: ['Wilt Chamberlain', 'Michael Jordan', 'Kareem Abdul-Jabbar', 'Larry Bird'],
    correctAnswer: 'Wilt Chamberlain',
  },
]


export default async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body
    questions.push(data)
  }

  else if (req.method === 'GET') {
    const basketballQuiz = { questions
    };

    res.status(200).json(basketballQuiz);
  } else {
    res.status(405).end();
  }
};