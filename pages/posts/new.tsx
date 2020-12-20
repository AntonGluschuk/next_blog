import Head from 'next/head';
import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';

interface IProps {}

export default function NewPost({}: IProps) {
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
