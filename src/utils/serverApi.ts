'use server'

import { ResponseData } from '@tsc/champions'

const fetchApiVersion = async (): Promise<string> => {
  try {
    const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json')

    if (!response.ok) {
      throw new Error('버전 정보를 가져오지 못했습니다.')
    }

    const data = await response.json()

    return data[0]
  } catch (error) {
    if (error instanceof Error) {
      console.error(`API 버전 가져오기 실패: ${error.message}`)
    } else {
      console.error('알 수 없는 에러가 발생했습니다.')
    }

    throw error
  }
}

export const fetchChampionList = async (): Promise<ResponseData> => {
  try {
    const version = await fetchApiVersion()

    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`, {
      next: {
        revalidate: 86400
      }
    })

    if (!response.ok) {
      throw new Error(`챔피언 목록 요청 실패. 상태 코드: ${response.status}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    if (error instanceof Error) {
      console.error(`챔피언 목록 가져오기 실패: ${error.message}`)
    } else {
      console.error('알 수 없는 에러가 발생했습니다.')
    }

    throw error
  }
}
