import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function MainLayout({ children }: Props) {
  return (
    <>
      <Head>
        <meta name="keywords" content="nextjs, reactjs, blog" />
        <meta name="description" content="Blog about javascript" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
