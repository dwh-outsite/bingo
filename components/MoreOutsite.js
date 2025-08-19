import Logo from "./Logo"

export default function MoreOutsite() {
  return (
    <div className="bg-white text-lg p-8 space-y-4">
      <Logo className="w-56 mx-auto" />
      <p>
        Wij zijn dé <strong>LHBT+ jongerenvereniging</strong> van Delft en naast de wekelijkse <strong>borrelavond op donderdag</strong> is er elk kwartaal een OUTnight: een <strong>groot themafeest</strong> waarbij het hele pand versierd word: we trekken werkelijk alles uit de kast.
        Mocht je nu nieuwsgierig zijn geworden: na de homobingo begint de <strong>Silent Disco en Game Night</strong> in het pand! Bovendien is er woensdag vanaf 21:00 <strong>karaoke</strong> bij de <strong>Masqueerade Party</strong>!
        Had ik al gezegd dat de feesten en borrelavond <strong>open zijn voor iedereen</strong>? Daarnaast is twee keer per week een gezellige eettafel op maandag en donderdag, members only.
        Just a few cool people and you better be one of them ✨ Xoxo
      </p>
      <a href="https://outsite.nl">
        <button className="bg-pink-500 rounded-full px-6 py-3 text-white shadow-lg font-semibold flex items-center hover:bg-brand-400 text-lg mt-6 mx-auto" data-v-6beed550="">
          Meer info over Outsite
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" icon="arrow-right" className="fill-current w-3 h-3 ml-2" data-v-6beed550=""><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon></svg>
        </button>
      </a>
      <a href="https://my.dwhdelft.nl/signup">
        <button className="bg-white rounded-full px-6 py-3 text-brand-400 shadow-lg font-semibold flex items-center hover:bg-brand-100 text-lg mt-2 mx-auto" data-v-a517f03a="">
          Of schrijf je direct in
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" icon="arrow-right" className="fill-current w-3 h-3 ml-2" data-v-a517f03a=""><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon></svg>
        </button>
      </a>
    </div>
  )
}
