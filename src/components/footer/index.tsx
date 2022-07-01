import styles from './footer.module.css'
import { RiMusic2Fill } from 'react-icons/ri'
import Marquee from 'react-fast-marquee'
import { FC } from 'react'
import Video from '@api.video/nodejs-client/lib/model/Video'

export interface ISidebarProps {
    video: Video
}

const Footer: FC<ISidebarProps> = ({ video }): JSX.Element => {
    return (
        <div className={styles.videoFooter}>
            <div className={styles.videoFooter__text}>
                <h3>
                    <span>@</span>api.video
                </h3>
                <p>{video.title}</p>

                <div className={styles.videoFooter__marquee}>
                    <RiMusic2Fill size={16} color={'#e9e9e9'} />
                    <Marquee
                        gradient={false}
                        pauseOnHover={true}
                        speed={40}
                        style={{ maxWidth: '40%', marginLeft: '10px' }}
                    >
                        <p>Integrate video with a few lines of code</p>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Footer
