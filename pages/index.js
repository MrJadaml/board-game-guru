import App from '../components/app'
import { useRouter } from 'next/router'
import { map } from 'lodash'
import { List } from '../widgets/list/'

import { gamesGenerator } from '../db/'

const allGames = gamesGenerator(7)

export default () => {
  const router = useRouter()
  const { slug } = router.query

  const getUpdatedGames = () => {
    const setHref = map(allGames, game => {
      const href = `/game/${game.title}`
      const nextGame = { ...game, href }

      return nextGame;
    })

    return setHref;
  }

  const nextGames = getUpdatedGames();

  return (
    <App>
      <List
        collection={nextGames}
        componentType="card"
      />
    </App>
  )
}
