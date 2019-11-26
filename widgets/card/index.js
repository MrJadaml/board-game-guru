import React from 'react'
import Link from 'next/link'
import styles from './card.scss'

export default function Card({ title, idx, slug, ...rest }) {

  const bgColorClass = `color-${idx % 3}`

  return (
    <Link href={`/game/${slug}`} key={slug}>
      <div className={`${styles.card} ${styles[bgColorClass]}`}>
        <h3>{title}</h3>
      </div>
    </Link>
  )
}
