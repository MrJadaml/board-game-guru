import React from 'react'
import { map } from 'lodash'
import typeMap from '../component-type-map';

export const List = ({ collection, componentType }) => {
  return (
    <div>
      {map(collection, item => {
        return React.createElement(
          typeMap[componentType],
          { componentType, item },
          null
        )
      })}
    </div>
  )
}
