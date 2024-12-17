'use client'

import { useQuery } from '@tanstack/react-query'

import ChampionWidthItemCard from '@components/common/ChampionWidthItemCard'

import { Champion } from '@tsc/champions'

import { getChampionRotation } from '@utils/riotApi'

const RotationSection = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['rotataion'],
    queryFn: getChampionRotation
  })

  if (isPending) {
    return <div>로딩 중...</div>
  }

  if (isError) {
    return <div>에러 발생..</div>
  }

  return (
    <section className="py-[50px]">
      <h1 className="text-xl font-bold mb-6 text-center text-slate-900 dark:text-white">
        오늘 무료로 사용 가능한 챔피언
      </h1>
      <div className="grid grid-cols-2 gap-4 p-2 m-auto md:grid-cols-3 lg:grid-cols-5">
        {data.map((item: Champion) => (
          <ChampionWidthItemCard champion={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default RotationSection
