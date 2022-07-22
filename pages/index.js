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
        <div class='card card-compact shadow-xl bg-base-100'>
          <div class='card-body'>
            <h2 class='card-title'>Works</h2>
            <ul>
              {allPostsData.map(({ id, date, title, cover }) => (
                <li className={utilStyles.listItem} key={id}>
                  <div class="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={cover} alt="Cover" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">{title}</h2>
                      <p><Date dateString={date} /></p>
                      <div class="card-actions justify-end">
                        <a href={`/posts/${id}`}><button class="btn btn-primary">View</button></a>
                      </div>
                    </div>
                  </div>



                  {/* <div class="card card-side bg-base-100 shadown-xl">
                    <figure><img src={cover}></img></figure>
                    <div class="card-body bg-base-200">
                      <h2 class="card-title">{title}</h2>
                      <p><small className={utilStyles.lightText}>
                        <Date dateString={date} />
                      </small></p>
                      <div class="card-actions justify-end">
                        <a href={`/posts/${id}`}>
                          <button class="btn">
                            <p>查看</p>
                          </button>
                        </a>

                      </div>
                    </div>
                  </div> */}
                </li>
              ))}
            </ul>


          </div>

        </div>

      </section>
    </Layout>
  )
}