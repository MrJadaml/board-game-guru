import { useRouter } from 'next/router'
import { map } from 'lodash'
import { Boards } from '../../components/boards/'
import { List } from '../../widgets/list'
import { partsGenerator } from '../../db/'

const parts = partsGenerator();

const Game = () => {
  const router = useRouter()
  const { slug } = router.query

  const getUpdatedParts = () => {
    const setHref = map(parts, part => {
      const href = `/game/${slug}/${part.title}`
      const nextPart = { ...part, href }

      return nextPart;
    })

    return setHref;
  }

  const nextParts = getUpdatedParts();

  return (
    <>
      <h1>{slug}</h1>
      <h2>Components</h2>

      <List
        collection={nextParts}
        componentType="card"
      />
    </>
  )
}

export default Game
      // <Boards allBoards={parts.boards} />
