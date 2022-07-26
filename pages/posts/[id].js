import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'


export default function Post({ postData }) {
    return (
        <Layout>
            <div class="text-sm breadcrumbs card-body m-auto">
                <ul>
                    <li><a href="/">
                        <button class="btn btn-ghost">Home</button>
                    </a></li>
                    <li><a>{postData.id}</a></li>
                </ul>
            </div>
            {/* 文章内容 */}
            <div class='card-body m-auto'>
                <head>
                    <title>{postData.title}</title>
                </head>

                <div>
                    <article>

                        {/* <a href="/">
                            <button class="btn btn-ghost">Back</button>
                        </a> */}
                        <h1>{postData.title}</h1>
                        <div className={utilStyles.lightText}>
                            <Date dateString={postData.date} />
                        </div>
                        <br />
                        <div class='prose prose-img:rounded-xl max-w-none min-w-none' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />


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