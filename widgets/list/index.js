import React from 'react'
import Card from '../card/'

export default function List({ resource }) {
  return (
    <div>
      {resource.map(item => <Card {...item} key={item.slug}/> )}
    </div>
  )
}
