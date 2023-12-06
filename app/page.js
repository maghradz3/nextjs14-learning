import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl mb-8 font-bold">Next.js Tutorial</h1>
      <Link href="/client" className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
