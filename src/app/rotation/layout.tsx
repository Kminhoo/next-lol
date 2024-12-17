import Providers from '@components/provider/RTQProvier'

const RotationLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Providers>{children}</Providers>
    </>
  )
}

export default RotationLayout
