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
        <p>Hello, I'm Patrick. I'm a graphic designer and digital artist. I love to read manga and watch movies in my free time.</p>
        <p> My expectation in this subject </p>
        <ul>
          <li>I expect this subject to be challenging for me</li>
          <li>I will gain new knowledge after this sem</li>
          <li>I expect that I will have mun while learning</li>
        </ul>

        <p>3 things about me</p>
        <ol>
          <li>I love to sleep</li>
          <li>Self motivated</li>
          <li>Introverted</li>
          <li>I love to read</li>
        </ol>
      
      </section>
    </Layout>
  );
}