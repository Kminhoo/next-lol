import Image from 'next/image'

import removeHtmlTags from '@utils/removeHtmlTags'

import { Spells } from '@tsc/champions'

type ChampionSpellCardProps = {
  spell: Spells
}

const ChampionSpellCard = ({ spell }: ChampionSpellCardProps) => {
  return (
    <div key={spell.id} className="flex flex-col items-center md:max-w-[250px] md:h-[350px] ">
      <Image
        width={50}
        height={50}
        alt={`${spell.name}`}
        className="w-[100px] h-[100px] rounded-md"
        src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/${spell.image.full}`}
      />
      <div className="text-center mt-5">
        <h3 className="text-slate-900 dark:text-white text-lg font-semibold ">{spell.name}</h3>
        <p className="text-sm break-keep text-gray-500">{removeHtmlTags(spell.description)}</p>
      </div>
    </div>
  )
}

export default ChampionSpellCard
