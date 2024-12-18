import { Champion } from '@tsc/champions'

export const getChampionRotation = async (): Promise<Champion[]> => {
  // 2초 지연 추가
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('/api/rotation')

  if (!response.ok) {
    throw new Error('로테이션 챔피언 데이터를 가져오지 못했습니다.')
  }

  const data: Champion[] = await response.json()

  return data
}
