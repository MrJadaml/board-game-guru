import { useRouter } from 'next/router'
import { Boards } from '../../components/boards/'
import { List } from '../../widgets/list'

import { partsGenerator } from '../../db/'

const parts = partsGenerator();

const Game = () => {
  const router = useRouter()
  const { slug } = router.query

  const TEMP_ICON = 'data:image/png;base64,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'

  const parts = {
    boards: {
      title: 'Boards',
      image: '#',
    },
    cards: {
      title: 'Cards',
      image: '#',
    },
    tiles: {
      title: 'Tiles',
      image: '#',
    },
    pieces: {
      title: 'Pieces',
      image: '#',
    },
  }

  const style = {
    display: 'inline-block', // if desktop
    // display: 'block', // if mobile
    position: 'relative',
    margin: '20px',
  }

  const pStyle = {
    background: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    position: 'absolute',
    top: '50%',
    fontSize: '30px',
  }

  return (
    <>
      <h1>{slug}</h1>
      <h2>Components</h2>

      <List
        collection={parts}
        componentType="card"
      />

      <Boards allBoards={parts.boards} />
    </>
  )
}

export default Game
