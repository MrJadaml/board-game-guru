import React from 'react'
import { map } from 'lodash'
import Card from '../card/'

export default function List({ collection }) {
  return (
    <div>
      {map(collection, item => <Card {...item} key={item.slug}/> )}
    </div>
  )
}
