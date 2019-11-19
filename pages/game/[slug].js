import { useRouter } from 'next/router'
import List from '../../widgets/list'

import { partsGenerator } from '../../db/'

const parts = partsGenerator(8);

const Game = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <h1>{slug}</h1>
      <h2>Components</h2>
      <List collection={parts} />
    </>

  )
}

export default Game
