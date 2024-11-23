import styles from './preloader.module.css'
import preloader from '../../public/loader.png'
import Image from 'next/image'

export function getLoader(message = "") {
    return (
        <div className={`${styles.mainLoader} d-flex justify-content-center align-middle`}>
            <Image src={preloader} className={`${styles.mainLoaderGifIndependent}`} alt='Preloader' /> <span style={{ alignSelf: 'center' }}> &nbsp; {message}</span>
        </div>
    )
}

export function getFullScreenLoader(message = "") {
    return (
        <div className={`${styles.mainLoaderFull} d-flex justify-content-center align-middle`}>
            <Image src={preloader} className={`${styles.mainLoaderGifIndependent}`} alt='Preloader'/> <span style={{ alignSelf: 'center' }}> &nbsp; {message}</span>
        </div>
    )
}

export default function Loader() {
    return (
        <>
            <Image src={preloader} className={`${styles.mainLoaderGif}`} alt='Preloader'/>
        </>
    )

}