import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/take-quiz">
        <button>Take a Quiz Page</button>
      </Link>
      <p></p>
      <Link href="/submit-quiz">
        <button>Submit a Quiz Question</button>
      </Link>
    </div>
  );
};

export default Home;
