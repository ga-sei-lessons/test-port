// import image from next.js
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return(
    <div>
      <h1>About</h1>

      <p className={styles.extraGreen}>I am a super cool software engineer now. I make neat stuff with codes!</p>

    {/* loading an image locally */}
    <Image 
      src='/vercel.svg'
      alt='picture of a magnificent creature'
      width={300}
      height={300}
    />

    {/* using another hosting domain */}
    <Image 
      src='https://placekitten.com/300/300'
      alt='picture of a magnificent creature'
      width={300}
      height={300}
    />
    </div>
  )
}