import Head from 'next/head';
import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';

interface Props {}

export default function NewPost({}: Props) {
  const clickHandler = () => {
    Router.push('/');
  };

  return (
    <MainLayout>
      <Head>
        <title>Blog | New Post</title>
      </Head>
      <h1>New Post</h1>
      <button onClick={clickHandler}>Go back to home</button>
    </MainLayout>
  );
}
