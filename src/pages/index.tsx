import Video from '@api.video/nodejs-client/lib/model/Video'
import VideosListResponse from '@api.video/nodejs-client/lib/model/VideosListResponse'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import DesktopView from '../components/desktopView'
import Upload from '../components/upload'
import VideoComponent from '../components/video/index'
import styles from './index.module.css'

const Home: NextPage = () => {
    const [videos, setVideos] = useState<Video[]>([])
    const { data, mutate } = useSWR<VideosListResponse>('api/videos?method=get')

    useEffect(() => {
        data && setVideos(data.data.reverse())
        const sections = document.getElementById('videos__container')
        // sections?.scrollTo({ top: 0, behavior: 'smooth' })
        sections?.scrollIntoView(true)
    }, [data])

    return (
        <div className={styles.app} id="videos__container">
            <Head>
                <title>TikTok clone</title>
                <meta name="description" content="Rebuilding TikTok with api.video, PWA, Next.js and Typescript 🎵" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.app__large_screen}>
                <DesktopView />
            </div>

            <div className={styles.app__videos}>
                {videos.map((video: Video) => {
                    return <VideoComponent key={video?.videoId} video={video} mutate={mutate} />
                })}
            </div>

            <Upload mutate={mutate} />
        </div>
    )
}

export default Home
