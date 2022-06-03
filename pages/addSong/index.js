import { useState } from 'react'
import { fetchQuery } from '../../lib/utilities/fetch'
import { addSongQuery } from '../../lib/utilities/graphql/mutations'
import styles from './index.module.css'

const initialState = {
    singer: '',
    lyrics: ''
}

export default function AddSong() {
    const [form, setForm] = useState({ ...initialState })

    function setter(key, value) {
        setForm(prev => ({ ...prev, [key]: value }))
    }

    async function submit() {
        try {
            fetchQuery(addSongQuery(form))
            alert('record nemsen')
            setForm({ ...initialState })
        } catch (err) {
            console.error(err)
            alert('aldaa garlaa')
        }
    }

    return (
        <div className={styles.addSongPage}>
            <div className={styles.field}>
                <label>
                    Singer:
                </label>
                <input value={form.singer} onChange={e => setter('singer', e.target.value)} />
            </div>
            <div className={styles.field}>
                <label>
                    Lyrics:
                </label>
                <textarea value={form.lyrics} onChange={e => setter('lyrics', e.target.value)} />
            </div>
            <div className="">
                <button onClick={submit}>
                    Submit
                </button>
            </div>
        </div>
    )
}
