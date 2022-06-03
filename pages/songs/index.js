import { getSongs } from '../../lib/redis/operations/song'
import styles from './index.module.css'

export default function Songs({ songs }) {
   return (
      <div className={styles.songsPage}>
         {songs.map((song, i) =>
            <div className="" key={i}>
               {song.entityId},
               {song.singer},
               {song.lyrics}
            </div>
         )}
      </div>
   )
}

export async function getServerSideProps() {
   let songs = await getSongs()
   songs = songs.map(song => song.toJSON())
   return {
      props: {
         songs,
      }
   }
}
