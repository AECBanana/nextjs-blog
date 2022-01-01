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
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                </header>
            </div>
            <div className={styles.card}>
                <main>{children}</main>
                {home ? (
                    <p className={utilStyles.colorInherit}>到头了</p>
                ) : (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <p>← Back</p>
                        </Link>
                    </div>
                )}
            </div>
        </div >
    )
}