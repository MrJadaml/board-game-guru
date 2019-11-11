import App from '../components/app'
import List from '../widgets/list/'

import { gamesGenerator } from '../db/'

const allGames = gamesGenerator(7)

export default () => (
  <App>
    <List resource={allGames} />
  </App>
)
