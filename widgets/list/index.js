import React from 'react'
import { map } from 'lodash'
import typeMap from '../component-type-map';
import PropTypes from 'prop-types';

export const List = ({ collection, componentType }) => {
  return (
    <div>
      {map(collection, (itemProps, idx) => {
        return React.createElement(
          typeMap[componentType],
          { idx, ...itemProps },
          null
        )
      })}
    </div>
  )
}

List.propTypes = {
  collection: PropTypes.array,
  componentType: PropTypes.string,
};

List.defaultProps = {
  collection: [],
  componentType: 'item',
};
