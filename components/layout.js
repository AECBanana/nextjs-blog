import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'


const name = 'AeCw'
export const siteTitle = 'AeCw Blog'

export default function Layout({ children, home }) {
    return (
        <div className={styles.flex}>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="?"
                    content="?"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </head>
            <div className={styles.container}>
                <header>
                    <div class='card w-144 bg-base-100 shadow-xl'>
                        <div class='card-body items-center text-center'>
                            <div class='avatar'>
                                <div class='w-114 rounded-full'>
                                    <Image
                                        priority
                                        src="/images/profile.jpg"
                                        className={utilStyles.borderCircle}
                                        height={144}
                                        width={144}
                                        alt={name}
                                    />
                                </div>
                            </div>
                            <h1 class='card-title'>{name}</h1>
                            <div class='card-actions '>
                                <button class="btn btn-sm btn-ghost"><a href='https://github.com/AECBanana'>Github</a></button>
                                <button class="btn btn-sm btn-ghost"><a href='mailto:aecbanana@outlook.com'>邮箱 / Email</a></button>
                            </div>

                        </div>
                    </div>
                </header>
            </div>
            <div className={styles.card}>
                <main>{children}</main>
                {home ? (
                    <div tabindex="0" class="collapse">
                        <div class="collapse-title text-center font-medium">
                            到头了
                        </div>
                        <div class="collapse-content text-center">
                            <p>真的到头了（￣︶￣）↗　</p>
                        </div>
                    </div>
                ) : (

                    <></>

                )}
            </div>
        </div >
    )
}