import { useRouter } from 'next/router'
import { Boards } from '../../components/boards/'

import { partsGenerator } from '../../db/'

const parts = partsGenerator();

const Game = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <h1>{slug}</h1>

      <h2>Components</h2>
      <Boards allBoards={parts.boards} />
    </>
  )
}

export default Game
