import { useRouter } from 'next/router'
import { map } from 'lodash'

import { Boards } from '../../../components/boards/'
import { List } from '../../../widgets/list'

import { categoryItemsGenerator } from '../../../db/'

const categoryItems = categoryItemsGenerator();

const Game = () => {
  const router = useRouter()
  const {
    gameSlug,
    category_item_slug: categoryItemSlug
  } = router.query

  return (
    <>
      <h1>{gameSlug}</h1>
      <h2>{categoryItemSlug}</h2>

      <List
        collection={categoryItems}
        componentType="card"
      />
    </>
  )
}

export default Game
