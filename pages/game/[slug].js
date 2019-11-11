import { useRouter } from 'next/router'

const Game = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <h1>{slug}</h1>
      <h3>Cards</h3>
    </>

  )
}

export default Game
