const SkeletonSpellCard = () => {
  return (
    <div className="flex flex-col items-center w-full h-full md:max-w-[300px] md:h-[350px] ">
      <div className="w-[100px] h-[100px] border rounded-md bg-gray-200 dark:bg-gray-700" />
      <div className="text-center mt-5">
        <div className="w-[150px] h-[30px] border rounded-md bg-gray-200 dark:bg-gray-700 "></div>
        <div className="mt-2">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px] mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonSpellCard
