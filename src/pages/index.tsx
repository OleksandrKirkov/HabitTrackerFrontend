import { RootLayout } from '@/components/layouts/overlay/root-layout/root-layout'
import { Home } from '@/components/screens/home/home'
import { withAuth } from '@/components/ui/with-auth/with-auth'

import { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
    return <Home />
}

Page.getLayout = (page) => {
    return <RootLayout>{page}</RootLayout>
}

export default withAuth(Page)
