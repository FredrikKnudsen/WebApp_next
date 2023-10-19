import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/take-quiz">
        <button>Take a Quiz Page</button>
      </Link>
    </div>
  );
};

export default Home;
