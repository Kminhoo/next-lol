const SkeletonItemDetailLoading = () => {
  return (
    <div className="bg-white dark:bg-slate-800">
      <div>
        <div className="box-border min-h-[calc(100vh-90px)] h-ful px-2 py-[50px] flex items-center justify-center max-w-7xl m-auto md:max-w-4xl md:min-h[calc(100vh-140px)]">
          <div className="w-full flex items-center flex-col gap-5 md:gap-3">
            <div className="w-[130px] h-[32px] border rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div className="w-[110px] h-[28px] border rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div className="w-[200px] h-[200px] border rounded-md bg-gray-200 dark:bg-gray-700 block mx-auto" />
            <div className="w-full mt-3">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] w-full mb-2.5 mx-auto " />
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px] w-full mb-2.5 mx-auto " />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonItemDetailLoading
