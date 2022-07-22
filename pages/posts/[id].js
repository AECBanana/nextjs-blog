import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../components/layout.module.css'
import Link from 'next/link'

export default function Post({ postData }) {
    return (
        <Layout>
            <div class='card card-compact shadow-xl bg-base-100'>
                <head>
                    <title>{postData.title}</title>
                </head>
                <div class='card-body'>
                    <article>
                        <a href="/">
                            <button class="btn btn-ghost">Back</button>
                        </a>
                        <h1 class='card-title'>{postData.title}</h1>
                        <div className={utilStyles.lightText}>
                            <Date dateString={postData.date} />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                    </article>
                </div>

            </div>

        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}