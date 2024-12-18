import SkeletonCard from './SkeletonCard'

const SkeletonSection = () => {
  return (
    <div className="py-[50px] bg-white dark:bg-slate-800">
      <div className="w-full">
        <div className='w-[380px] h-[30px] border m-auto mb-6 rounded-md bg-gray-200 dark:bg-gray-700"'></div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-2 m-auto md:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 20 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default SkeletonSection
