import SkeletonSpellCard from '@components/ui/skeleton/SkeletonSpellCard'

const SkeletonChampionDetailLoading = () => {
  return (
    <section className="br-white dark:bg-slate-800">
      <div className="max-w-7xl w-full h-full mx-auto py-[50px] px-2 flex flex-col items-center md:max-w-5xl md:items-start">
        <div className="w-[60px] h-[32px] border rounded-md bg-gray-200 dark:bg-gray-700"></div>
        <div className="mt-2 w-[70px] h-[28px] border rounded-md bg-gray-200 dark:bg-gray-700"></div>
        <div className="w-[200px] h-[200px] mt-2 md:block border rounded-md bg-gray-200 dark:bg-gray-700 md:mx-auto" />

        <div className="w-full mt-3 md:mt-10">
          <div className="h-2  bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
          <div className="h-2  bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px] mb-2.5" />
          <div className="h-2  bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5" />
          <div className="h-2  bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px] mb-2.5" />
          <div className="h-2  bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
        </div>

        <div className="w-[130px] h-[30px] border rounded-md bg-gray-200 dark:bg-gray-700 mt-10 md:mt-16"></div>
        <div className="mt-10 w-full flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-10">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonSpellCard key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkeletonChampionDetailLoading
