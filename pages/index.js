import BingoCard from '../components/BingoCard'
import HomoBingo from '../components/HomoBingo'
import Logo from '../components/Logo'
import MoreOutsite from '../components/MoreOutsite'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800">
      <div className="bg-white w-full flex justify-center p-4 border-b-8 border-pink-400">
        <Logo className="h-20" />
      </div>
      <div className="flex flex-col justify-center py-12">
        <BingoCard />
      </div>
      <div className="container px-4 mb-4 max-w-lg">
        <HomoBingo />
      </div>
      <div>
        <MoreOutsite />
      </div>
    </div>
  )
}
