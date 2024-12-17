export const getChampionRotation = async () => {
  const response = await fetch('/api/rotation')

  if (!response.ok) {
    throw new Error('로테이션 챔피언 데이터를 가져오지 못했습니다.')
  }

  const data = await response.json()
  return data
}
