import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './upload.module.css'
import { VideoUploader, VideoUploadResponse } from '@api.video/video-uploader'
import { RiAddFill } from 'react-icons/ri'
interface IUploadProps {
    mutate: () => void
}

const Upload: FC<IUploadProps> = ({ mutate }): JSX.Element => {
    const [progress, setProgress] = useState<number>(0)
    const [isUploading, setIsUploading] = useState<boolean>(false)

    const [video, setVideo] = useState<VideoUploadResponse | undefined>(undefined)
    const [ready, setReady] = useState<boolean>(false)
    const [status, setStatus] = useState<{ ingested: boolean; encoded: boolean }>({ ingested: false, encoded: false })
    const [interId, setInterId] = useState<number | undefined>(undefined)

    useEffect(() => {
        if (video) {
            const intervalId = window.setInterval(() => {
                fetchVideoStatus(video.videoId)
            }, 1000)
            setInterId(intervalId)
            return () => clearInterval(intervalId)
        }
    }, [video, ready])

    useEffect(() => {
        ready && window.clearInterval(interId)
    }, [interId, ready])

    // CONSTANTS
    const inputFile = useRef<HTMLInputElement | null>(null)
    // HANDLERS
    const openFilePicker = () => {
        // setVideo(undefined)
        // setReady(false)
        // setInterId(undefined)
        // !isUploading && inputFile && inputFile?.current?.click()
        alert(
            `You can't upload a video in this demo for security concerns. To try,  clone the repo, enter your API Key and upload your own videos. https://github.com/apivideo/tiktok_clone`
        )
    }

    const fileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target
        if (files?.length) {
            setIsUploading(true)
            const uploadToken = process.env.NEXT_PUBLIC_UPLOAD_TOKEN as string
            const uploader = new VideoUploader({
                file: files[0],
                uploadToken,
            })
            try {
                uploader.onProgress((e) => setProgress(Math.round((e.uploadedBytes * 100) / e.totalBytes)))

                const res = await uploader.upload()
                setVideo(res)
                setStatus({
                    ingested: true,
                    encoded: false,
                })
                setIsUploading(false)
            } catch (e) {
                console.error(e)
            }
        }
    }

    const fetchVideoStatus = async (videoId: string): Promise<void> => {
        const data = await fetch(`api/videos/${videoId}`)
        const status = await data.json()

        const { encoding, ingest } = status

        if (ingest.status === 'uploaded')
            setStatus({
                ingested: false,
                encoded: true,
            })
        if (ingest.status === 'uploaded' && encoding.playable) {
            setStatus({
                ingested: false,
                encoded: false,
            })
            setReady(true)
            mutate()
            setTimeout(() => {
                scrollTo()
            }, 2000)
        }
    }

    const scrollTo = () => {
        const sections = document.querySelector(`#${video?.videoId}`)
        return sections?.scrollIntoView(true)
    }

    const renderStatus = () => {
        const { ingested, encoded } = status
        if (isUploading) {
            return (
                <>
                    <p className={styles.upload__label}>Uploading...</p>
                    <div className={styles.upload__progress}>
                        <span className={styles.upload__progressbar} style={{ width: `${progress}%` }}></span>
                    </div>
                </>
            )
        }
        if (ingested) {
            return (
                <>
                    <p className={styles.upload__label}>Ingesting...</p>
                </>
            )
        }
        if (encoded) {
            return (
                <>
                    <p className={styles.upload__label}>Encoding...</p>
                </>
            )
        }
    }

    return (
        <div className={styles.upload} onClick={openFilePicker}>
            {renderStatus()}
            {!isUploading && !status?.ingested && !status?.encoded && (
                <>
                    <div className={styles.addIcon__wrapper}>
                        <RiAddFill size={20} color={'#111111'} />
                    </div>
                    <input
                        type="file"
                        id="upload"
                        ref={inputFile}
                        name="upload"
                        onChange={(e) => fileInputChange(e)}
                        style={{ display: 'none' }}
                    />
                </>
            )}
        </div>
    )
}

export default Upload
