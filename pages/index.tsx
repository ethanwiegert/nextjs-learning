import { NextPage } from 'next';
import Head from 'next/head';
import AnimatedBackground from '../components/AnimatedBackground';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Animated background with TypeScript" />
      </Head>
      <AnimatedBackground />
      <div className="text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js App!</h1>
        <p className="text-gray-300">This is a simple homepage with an animated background.</p>
      </div>
    </div>
  );
};

export default Home;
