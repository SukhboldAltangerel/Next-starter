import Link from 'next/link'
import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.indexPage}>
      Index page
      <Link href="/api/createIndex">
        Create index
      </Link>
      <Link href="/addSong">
        Add a song
      </Link>
      <Link href="/songs">
        Songs
      </Link>
    </div>
  )
}
