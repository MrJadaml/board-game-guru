import React from 'react'
import { map } from 'lodash'
import typeMap from '../component-type-map';
import PropTypes from 'prop-types';

let idx = 0;

export const List = ({ collection, componentType }) => {
  return (
    <div>
      {map(collection, itemProps => {
        idx = idx + 1

        return React.createElement(
          typeMap[componentType],
          { idx, ...itemProps },
          null
        )
      })}
    </div>
  )
}

// List.propTypes = {
  // collection: PropTypes.oneOf([PropTypes.array, PropTypes.object]),
  // componentType: PropTypes.string,
// };

// List.defaultProps = {
  // collection: [],
  // componentType: 'item',
// };
