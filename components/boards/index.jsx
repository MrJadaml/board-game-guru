import { map } from 'lodash'
import  CategoryItem from '../../widgets/category-item/'

export const Boards = ({ allBoards }) => {
  return (
    <>
      <h3>{allBoards.title}</h3>

      {map(allBoards.gameBoards, ({ title, items }) => {
        return (
          <CategoryItem title={title} items={items} />
        )
      })}
    </>
  )
}
