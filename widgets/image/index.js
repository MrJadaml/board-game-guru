import React from 'react'

export const Image = ({ item, ...rest}) => {
  const styles = {
    width: '40%',
  }

  return (
    <img style={styles} src={item} />
  )
}
