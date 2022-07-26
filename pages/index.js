import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
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


        <div class='grid grid-cols-1 md:grid-cols-3 card-body m-auto '>

          {allPostsData.map(({ id, date, title, cover, tag, tagType }) => (
            <div class='col-span-1 mt-0 ml-auto mr-auto mb-auto' key={id}>
              <div class="card card-compact bg-base-100 shadow-xl">
                <figure><img src={cover} alt="Cover" /></figure>
                <div class="card-body">
                  <h2 class="card-title">{title}</h2>
                  <span id='badge' class='badge badge-secondary badge-outline justify-end'>{tag}</span>
                  <Date dateString={date} />
                  <div class="card-actions justify-end">

                    <a href={`/posts/${id}`}><button class="btn btn-primary text-base-100">View / 查看</button></a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>







      </section>
    </Layout>
  )
}