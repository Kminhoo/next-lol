const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white dark:bg-slate-800">
      <div className="border p-1 flex flex-col items-center rounded-md shadow-md justify-center gap-2 max-w-[300px] max-h-[300px] w-full h-full">
        <div className="w-[50px] h-[50px] border rounded-md bg-gray-200 dark:bg-gray-700 md:w-[100px] md:h-[100px]" />

        <div className="w-[40px] h-[24px] border rounded-md bg-gray-200 dark:bg-gray-700"></div>

        <div className="w-[80px] h-[20px] border rounded-md bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  )
}

export default SkeletonCard
