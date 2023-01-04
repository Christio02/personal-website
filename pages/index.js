import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import getApod from "../components/apod";



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home ({apod, allPostsData }) {
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

      {/* <section className= {`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1>NASA Astronomy Picture of the Day</h1>
        <img src={apod.url} alt={apod.title} />
        <p>{apod.explanation}</p>
        {apod.copyright && <p>Copyright: {apod.copyright}</p>}
      </section> */}

   </Layout>
  );
}

Home.getInitalProps = async () => {
  const date = new Date().toISOString().substring(0, 10); // YYYY-MM-DD
  const apod = await getApod(date);

  return { apod };
};
