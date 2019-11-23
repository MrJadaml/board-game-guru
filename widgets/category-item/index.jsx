import { map } from 'lodash'
import { Item } from '../../widgets/item'

export const CategoryItem = ({ items, title }) => {
  return (
    <>
      <h3>{title}</h3>

      {map(items, ({ title, images }) => {
        return (
          <Item title={title} images={images} />
        )
      })}
    </>
  )
}

export default CategoryItem
