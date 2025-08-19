import HomoBingoImage from '../assets/images/homobingo.jpg'

export default function HomoBingo() {
  return (
    <div className="bg-pink-400 rounded-2xl text-white text-lg overflow-hidden">
      <img src={HomoBingoImage.src} className="h-56 w-full object-cover" />
      <div className="p-4">
        <strong>Hoihoi!</strong> Superleuk dat je bij de <strong>homobingo</strong> bent, you're in for a treat want dit is niet je standaard bingo 👀
        Al jaren wordt de homobingo gepresenteerd door de fabuleuze <strong>ZsaZsa</strong> en haar assistent <strong>Dante</strong>.
        Zoals gewoonlijk zijn er prijzen te winnen voor een goede bingo, maar roep pas <strong>BINGO</strong> als je het zeker weet!
        ZsaZsa en Dante zijn heel zachtaardig maar van een <strong>valse bingo</strong> worden zij ook vals!
      </div>
    </div>
  )
}
