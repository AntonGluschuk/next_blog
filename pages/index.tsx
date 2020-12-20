import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';

interface IProps {}

export default function Home({}: IProps) {
  const clickHandler = () => {
    Router.push('/posts/new');
  };

  return (
    <MainLayout>
      <Head>
        <title>Blog | Latest Posts</title>
      </Head>
      <h1>Latest Posts</h1>
      <button onClick={clickHandler}>Create new post</button>
      <div>
        <Link href={'posts/1'}>
          <h2>Post 1</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consequatur quasi, quam ipsa sunt suscipit iste adipisci,
          reprehenderit nisi illum aliquid aut officia omnis, illo amet
          obcaecati aperiam officiis quisquam!
        </p>
      </div>
    </MainLayout>
  );
}
