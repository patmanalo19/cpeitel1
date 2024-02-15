import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> 10 things that requires 0 talent </p>
         <ol>
          <li>Being on Time</li>
          <li>Body language</li>
          <li>Effort</li>
          <li>Energy</li>
          <li>Being coachable</li>
          <li>Doing extra</li>
          <li>Positive Attitude</li>
          <li> Being prepared</li>
          <li>Following work ethics</li>
          <li>Asking permission</li>
         </ol>

         <a href="url">our Next.js tutorial</a>
      </section>
    </Layout>
  );
}