import { Metadata } from 'next'

import Hero from '@components/ui/home/Hero'

export const metadata: Metadata = {
  title: '리그오브레전드',
  description: '리그오브레전드 챔피언과 아이템, 오늘의 챔피언을 소개합니다.'
}

const HomePage = () => {
  return (
    <main className="bg-white dark:bg-slate-800">
      <Hero />
    </main>
  )
}

export default HomePage
