import { RootLayout } from '@/components/layouts/overlay/root-layout/root-layout'
import { Home } from '@/components/screens/home/home'

import { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
    return <Home />
}

Page.getLayout = (page) => {
    return <RootLayout>{page}</RootLayout>
}

export default Page
