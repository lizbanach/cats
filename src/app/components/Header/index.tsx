import Link from 'next/link';

const Header = () => {
  return (
    <Link href="/">
      <h1 className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Whisker Wiki 😻
      </h1>
      <h2 className="mt-2 text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
        Your purr-sonal guide to cat breeds
      </h2>
    </Link>
  );
};

export default Header;
