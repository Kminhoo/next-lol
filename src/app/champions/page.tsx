import { Metadata } from 'next'

import ChampionSection from '@components/ui/championList/ChampionSection'

export const metadata: Metadata = {
  title: '리그오브레전드 챔피언 목록',
  description: '리그오브레전드에서 사용할 수 있는 150종 이상의 챔피언 목록'
}

const ChampionsPage = async () => {
  return (
    <main className="bg-white dark:bg-slate-800">
      <ChampionSection />
    </main>
  )
}

export default ChampionsPage
