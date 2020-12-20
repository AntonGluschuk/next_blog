import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchPosts } from '../redux/posts/postsSlice';
import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';

interface IProps {}

const selectPosts = (state: RootState) => state.posts.allPosts;

export default function Home({}: IProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const { posts, meta } = useSelector(selectPosts);

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
        {posts.map((post) => (
          <p key={post.id}>{post.body}</p>
        ))}
        {/* <Link href={'posts/1'}>
          <h2>Post 1</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consequatur quasi, quam ipsa sunt suscipit iste adipisci,
          reprehenderit nisi illum aliquid aut officia omnis, illo amet
          obcaecati aperiam officiis quisquam!
        </p> */}
      </div>
    </MainLayout>
  );
}
