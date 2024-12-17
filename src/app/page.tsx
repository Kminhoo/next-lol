import { Metadata } from 'next'

import Hero from '@components/ui/home/Hero'
import Description from '@components/ui/home/Description'
import HomeVideo from '@components/ui/home/HomeVideo'
import Community from '@components/ui/home/Community'

export const metadata: Metadata = {
  title: '리그오브레전드',
  description: '리그오브레전드 챔피언과 아이템, 오늘의 챔피언을 소개합니다.'
}

const HomePage = () => {
  return (
    <main className="bg-white dark:bg-slate-800">
      <Hero />
      <Description />
      <HomeVideo />
      <Community />
    </main>
  )
}

export default HomePage
