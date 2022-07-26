import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'


const name = 'AeCw'
export const siteTitle = 'AeCw Blog'

export default function Layout({ children, home }) {
    return (
        <div class='items-center'>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="?"
                    content="?"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </head>
            {/* 大的图 */}
            {<div class="hero min-h-screen">
                <div class="hero-overlay bg-opacity-60">
                </div>
                <div class="hero-content text-neutral-content">

                    <div class="max-w-md text-center">
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
                        <h1 class="mb-5 text-5xl font-bold">AeCw</h1>
                        <p class="mb-5">剑走偏锋的妹弓。音游爱好者。</p>
                        <button class="btn btn-sm btn-ghost"><a href='https://github.com/AECBanana'>Github</a></button>
                        <button class="btn btn-sm btn-ghost"><a href='mailto:aecbanana@outlook.com'>邮箱 / Email</a></button>
                    </div>
                </div>
            </div>}
            <div>
                <header>


                    {/* 头像 */}
                    {/* {<div class='card w-144 bg-base-100 shadow-xl'>
                        <div class='card-body items-center text-center'>
                            
                            <h1 class='card-title'>{name}</h1>
                            <div class='card-actions '>
                                <button class="btn btn-sm btn-ghost"><a href='https://github.com/AECBanana'>Github</a></button>
                                <button class="btn btn-sm btn-ghost"><a href='mailto:aecbanana@outlook.com'>邮箱 / Email</a></button>
                            </div>

                        </div>
                    </div>} */}


                </header>
            </div>
            {/* this */}
            <div>
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
            <footer class="footer p-10 bg-neutral-focus text-neutral-content">
                <div>
                    <span class="footer-title">友情链接</span>
                    <a class="link link-hover">招租位</a>
                    <a class="link link-hover">招租位</a>
                    <a class="link link-hover">招租位</a>
                    <a class="link link-hover">招租位</a>
                </div>
                <div>
                    <span class="footer-title">蓝白碗</span>
                    <a class="link link-hover" href='https://kaihei.co/1J8AVk'>KOOK</a>
                    <a class="link link-hover" >QQ群 1072271422</a>
                </div>
            </footer>
        </div >
    )
}