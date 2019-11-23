import { List } from '../../widgets/list'

export const Item = ({ title, images }) => {
  return (
    <>
      <h4>{title}</h4>

      <List
        collection={images}
        componentType="image"
      />
    </>
  )
}

export default Item
