import { NextPage } from 'next';
import Head from 'next/head';
import AnimatedBackground from '../components/AnimatedBackground';
import Layout from '../components/Layout';
import Container from '../components/Container';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Container in TypeScript with Tailwind CSS" />
      </Head>
      <Layout title="Home | Next.js + TypeScript Example">
      <AnimatedBackground />
      <Container>
        <div className="text-white">
          <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js App!</h1>
          <p className="text-gray-300">
            This is a simple homepage with a container using TypeScript and Tailwind CSS.
            The container has a distinct background color.
          </p>
        </div>
      </Container>
      </Layout>
    </div>
  );
};

export default Home;
