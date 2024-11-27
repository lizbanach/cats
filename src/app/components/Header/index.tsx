import Link from 'next/link';

const Header = () => {
  return (
    <Link href="/" className="text-center">
      <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
        Whisker Wiki 😻
      </h1>
      <h2 className="mt-2 text-pretty text-xl font-semibold tracking-tight sm:text-3xl">
        Your purr-sonal guide to cat breeds
      </h2>
    </Link>
  );
};

export default Header;
