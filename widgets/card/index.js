import React from 'react'
import Link from 'next/link'

export default function Card({ title, id, slug, ...rest}) {
  return (
    <Link href={`/game/${slug}`} key={slug}>
      <h3>{title}</h3>
    </Link>
  )
}
