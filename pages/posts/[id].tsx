import Head from 'next/head';
import { useRouter } from 'next/router';
import { MainLayout } from '../../components/MainLayout';

interface IProps {}

export default function Post({}: IProps) {
  const router = useRouter();
  return (
    <MainLayout>
      <Head>
        <title>Blog | Post</title>
      </Head>
      <div>
        <h1>Post {router.query.id}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          quibusdam voluptatum porro eligendi quos, labore atque tempora quia
          eos sapiente rem! Ducimus reprehenderit consequuntur id nam sed error
          earum quod.
        </p>
        <h2>Comments:</h2>
        <p>Comment 1</p>
      </div>
    </MainLayout>
  );
}
