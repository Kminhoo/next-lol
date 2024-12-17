import { Metadata } from 'next'

import { fetchChampionDetail } from '@utils/serverApi'

import ChampionInfoCard from '@components/ui/championDetail/ChampionInfoCard'

export type ChampionDetailPageProps = {
  params: {
    id: string
  }
}

export const generateMetadata = async ({ params }: ChampionDetailPageProps): Promise<Metadata> => {
  const response = await fetchChampionDetail(params.id)
  const champion = Object.values(response)[0]
  return {
    title: champion.name,
    description: champion.lore
  }
}

const ChampionDetailPage = async ({ params }: ChampionDetailPageProps) => {
  return (
    <main className="bg-white dark:bg-slate-800 md:min-h-screen">
      <ChampionInfoCard params={params} />
    </main>
  )
}

export default ChampionDetailPage
