import { NextResponse } from 'next/server'

import { Champion } from '@tsc/champions'
import { ChampionRotation } from '@tsc/rotation'

import { fetchChampionList } from '@utils/serverApi'

export const GET = async (request: Request): Promise<NextResponse> => {
  try {
    const [rotationResponse, championResponse] = await Promise.all([
      fetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations', {
        headers: {
          'Content-Type': 'application/json',
          'X-Riot-Token': process.env.RIOT_API_KEY!
        }
      }),
      fetchChampionList()
    ])

    if (!rotationResponse.ok) {
      return NextResponse.json({ error: '로테이션 정보를 가져오지 못했습니다.' }, { status: rotationResponse.status })
    }

    const rotationData: ChampionRotation = await rotationResponse.json()

    const championId: number[] = rotationData.freeChampionIds
    const champions: Champion[] = Object.values(championResponse.data)

    const filteredChampions = champions.filter((champion) => championId.includes(+champion.key))

    console.log('filteredChampions', filteredChampions)

    return NextResponse.json(filteredChampions)
  } catch (error: any) {
    return NextResponse.json(
      {
        message: '데이터를 가져오는 중 오류가 발생했습니다.',
        error: error.message
      },
      { status: 500 }
    )
  }
}
