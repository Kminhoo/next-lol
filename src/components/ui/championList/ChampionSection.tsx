import ChampionWidthItemCard from '@components/common/ChampionWidthItemCard'

import { fetchChampionList } from '@utils/serverApi'

import { Champion } from '@tsc/champions'

const ChampionSection = async () => {
  const { data } = await fetchChampionList()
  const champions: Champion[] = Object.values(data)

  return (
    <section>
      <div className="max-w-7xl m-auto py-[50px]">
        <h1 className="text-xl font-bold mb-6 text-center text-slate-900 dark:text-white">챔피언 목록</h1>
        <div className="grid grid-cols-2 gap-4 p-2 m-auto md:grid-cols-3 lg:grid-cols-5">
          {champions.map((champion) => (
            <ChampionWidthItemCard champion={champion} key={champion.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChampionSection
