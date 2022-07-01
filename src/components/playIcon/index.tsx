import { FC } from 'react'
import { RiPlayFill } from 'react-icons/ri'
import styles from './playIcon.module.css'

const PlayIcon: FC = (): JSX.Element => {
    return (
        <div className={styles.playIcon}>
            <div className={styles.playIcon__wrapper}>
                <RiPlayFill size={45} color={'#e9e9e9'} />
            </div>
        </div>
    )
}

export default PlayIcon
