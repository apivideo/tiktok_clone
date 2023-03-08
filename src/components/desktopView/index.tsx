import React, { FC } from 'react'
import QRCode from 'react-qr-code'
import styles from './desktop_view.module.css'
import ApiVideoLogoWhite from '../../../public/logo-white.svg'
import TikTokLogo from '../../../public/tiktok-logo.svg'
import Image from 'next/image'

const DesktopView: FC = (): JSX.Element => {
    return (
        <div className={styles.desktop}>
            <div className={styles.desktop__wrapper}>
                <div className={styles.banner__wrapper}>
                    <div className={styles.banner}>
                        <p className={styles.banner__title}>TikTok Clone</p>
                        <p className={styles.banner__subtitle}>
                            Scan the QR code to get the mobile experience <span className={styles.orange}>*</span>
                        </p>
                        <div className={styles.qrcode__dark}>
                            <div className={styles.qrcode__white}>
                                <QRCode value="https://api-video-tiktok-demo.vercel.app" size={200} />
                            </div>
                            <p className={styles.qrcode__title}>SCAN ME</p>
                        </div>
                        <div className={styles.banner__logo}>
                            <Image src={ApiVideoLogoWhite} alt="Logo api.video" />
                            <Image src={TikTokLogo} alt="Logo TikTok" />
                        </div>
                    </div>
                    <p className={styles.desktop__legend} style={{ width: ' 800px' }}>
                        <span className={styles.orange}>*</span> To ensure the best experience, make sure you install
                        the application on your phone. On <span className={styles.orange}>android</span>, you will have
                        a prompt message asking you to install the application. On{' '}
                        <span className={styles.orange}>ios</span>, please follow these{' '}
                        <a
                            href="https://youtu.be/bV8xE6lOdoY?t=7"
                            rel="noreferrer"
                            target="_blank"
                            className={styles.link}
                        >
                            steps
                        </a>
                        .
                    </p>
                </div>

                <div className={styles.desktop__container}>
                    <video
                        className={styles.desktop__video}
                        muted
                        autoPlay
                        loop
                        src={'https://cdn.api.video/vod/vi7Fsa0D6xz3uIP9Pcyzbkxp/mp4/source.mp4'}
                    />
                    <p className={styles.desktop__legend} style={{ textAlign: 'center' }}>
                        Preview
                    </p>
                </div>
            </div>
            <footer className={styles.footer}>
                Made with 🧡 &nbsp;by
                <a href="https://api.video" target="_blank" rel="noreferrer" className={styles.orange}>
                    &nbsp;api.video
                </a>
            </footer>
        </div>
    )
}

export default DesktopView
