import Image from 'next/image'

import ChampionSpellCard from '@components/ui/championDetail/ChampionSpellCard'

import { fetchChampionDetail } from '@utils/serverApi'

import { ChampionDetailData } from '@tsc/champions'

import { ChampionDetailPageProps } from '@app/champions/[id]/page'

const ChampionInfoCard = async ({ params }: ChampionDetailPageProps) => {
  const response: ChampionDetailData = await fetchChampionDetail(params.id)
  const champion = Object.values(response)[0]

  return (
    <section>
      <div className="max-w-7xl m-auto py-[50px] px-2 flex flex-col items-center md:max-w-5xl md:items-start">
        <h1 className="text-slate-900 dark:text-white text-2xl font-semibold md:text-4xl">{champion.name}</h1>
        <p className="mt-2 text-gray-500 text-lg md:text-2xl">{champion.title}</p>
        <Image
          width={50}
          height={50}
          className="w-[200px] h-[200px] mt-2 md:block md:mx-auto"
          alt={`${champion.name}`}
          src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion.image.full}`}
        />
        <p className="text-gray-500 mt-3 text-sm md:mt-10 md:text-base">{champion.lore}</p>
        <h2 className="text-slate-900 dark:text-white text-2xl mt-10 font-semibold md:text-4xl md:mt-16">
          챔피언 스킬
        </h2>
        <div className="mt-10 flex flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-2">
          {champion.spells.map((spell) => (
            <ChampionSpellCard spell={spell} key={spell.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChampionInfoCard
