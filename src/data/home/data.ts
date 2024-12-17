import Users from '@components/icons/Users'
import Sword from '@components/icons/Swrod'
import Trophy from '@components/icons/Trophy'

import { GameCharacters } from '@tsc/gameCharacters'

interface NavLinkType {
  id: number
  href: string
  label: string
}

export const NAV_LINKS: NavLinkType[] = [
  { id: 1, href: '/', label: '홈' },
  { id: 2, href: '/champions', label: '챔피언 목록' },
  { id: 3, href: '/items', label: '아이템 목록' },
  { id: 4, href: '/rotation', label: '오늘의 챔피언' }
]

export const gameCharacters: GameCharacters[] = [
  { id: 1, Icon: Users, title: '팀워크', desc: '5대5 전략 대전' },
  { id: 2, Icon: Sword, title: '챔피언', desc: '150개 이상의 고유한 챔피언' },
  {
    id: 3,
    Icon: Trophy,
    title: '랭크 시스템',
    desc: '실력을 증명하고 순위에 도전'
  }
]
