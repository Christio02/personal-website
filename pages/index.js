import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import ApodPage from "../components/apod";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home ({ allPostsData }) {
  return (
   <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className= {utilStyles.headingMd}>
        <p>Hello, I'm Christopher. I am currently studying Computer Science at the Norwegian University of Science and Technology</p>
      </section>
      
      <section className= {`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

      <section className= {utilStyles.headingMd}>
        <h3>Here is a NASA picture!</h3>
        <p>Here is a picture from NASA's Astronomy Picture of the Day API</p>
        <div>
          <ApodPage />    
        </div>
        

      </section>
   </Layout>
  );
}