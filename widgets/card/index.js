import React from 'react'
import Link from 'next/link'
import styles from './card.scss'

export default function Card({ title, id, slug, ...rest }) {
  return (
    <Link href={`/game/${slug}`} key={slug} className="card">
      <h3 className={styles.card}>{title}</h3>
    </Link>
  )
}
