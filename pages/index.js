import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div>
          <div class='prose'>
            <h1>Works</h1>
            <div class='not-prose'>
              <ul>
                {allPostsData.map(({ id, date, title, cover, tag, tagType }) => (
                  <li className={utilStyles.listItem} key={id}>
                    <div class="card card-compact bg-base-100 shadow-xl">
                      <figure><img src={cover} alt="Cover" /></figure>
                      <div class="card-body">
                        <h2 class="card-title">{title}<span id='badge' class='badge badge-secondary badge-outline'>{tag}</span></h2>


                        <p><Date dateString={date} /></p>
                        <div class="card-actions justify-end">

                          <a href={`/posts/${id}`}><button class="btn btn-primary btn-wide text-base-100">View / 查看</button></a>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>



          </div>

        </div>

      </section>
    </Layout>
  )
}