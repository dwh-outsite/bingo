import BingoCard from '../components/BingoCard'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-white w-full flex justify-center p-4 border-b-8 border-pink-400">
        <Logo className="h-20" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <BingoCard />
      </div>
    </div>
  )
}
