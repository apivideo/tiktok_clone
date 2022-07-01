import Video from '@api.video/nodejs-client/lib/model/Video'
import React, { FC, useRef, useState } from 'react'
import Footer from '../footer'
import Sidebar from '../sidebar'
import styles from './videos.module.css'
import ApiVideoPlayer from '@api.video/react-player'

export interface IvideosProps {
    video: Video
    mutate: () => void
}

const VideoComponent: FC<IvideosProps> = ({ video, mutate }): JSX.Element => {
    const [playing, setPlaying] = useState<boolean>(true)

    const { videoId } = video

    const videoRef = useRef<ApiVideoPlayer>(null)

    const onVideoPress = () => {
        if (playing) {
            pause()
        } else {
            play()
        }
    }

    const pause = () => {
        videoRef.current?.pause()
        setPlaying(false)
    }
    const play = () => {
        videoRef.current?.play()
        setPlaying(true)
    }

    const height = window.screen.availHeight - 50

    return (
        <>
            {video && (
                <div className={styles.video} id={videoId}>
                    <ApiVideoPlayer
                        video={{ id: videoId }}
                        videoStyleObjectFit={'cover'}
                        ref={videoRef}
                        style={{
                            width: screen.width,
                            height: height,
                            scrollSnapAlign: 'start',
                            border: 0,
                        }}
                        autoplay
                        chromeless
                        loop
                        muted
                    />
                    <div onClick={onVideoPress} className={styles.video__press}></div>

                    <Footer video={video} />
                    <Sidebar video={video} mutate={mutate} />
                </div>
            )}
        </>
    )
}

export default VideoComponent
