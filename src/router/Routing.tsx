import { Suspense } from "react";
import * as L from '@/layout/index';
import * as P from '@/pages/index';
import * as C from '@/components/index';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const Loading = () => <main className='w-full min-h-screen flex items-center justify-center bg-gray-100'>
    <C.Spinner size="9" />
</main>

interface Props {

}

const Routing = ({ }: Props) => {

    const router = createBrowserRouter(createRoutesFromElements(
        //RootLayout
        <Route path='/' element={<L.RootLayout />}>

            {/* UserRoutes  */}
            <Route path='/' element={<L.UserLayout />}>
                <Route index element={
                    <Suspense fallback={<Loading />}>
                        <P.Home />
                    </Suspense>
                } />
            </Route>
            {/* UserRoutes  */}



            {/* LogOutRoutes  */}
            <Route path='/' element={<L.LogOutLayout />}>
                <Route
                    path="/login"
                    element={
                        <Suspense fallback={<Loading />}>
                            <P.Login />
                        </Suspense>
                    } />
            </Route>
            {/* LogOutRoutes  */}

            {/* AdminRoutes  */}
            <Route path='/admin' element={<L.AdminLayout />}>
                <Route
                    path='/admin/dashboard'
                    element={<Suspense
                        fallback={<Loading />}>
                        <P.Dashboard />
                    </Suspense>} />
                <Route
                    path="/admin/projects"
                    element={<Suspense
                        fallback={<Loading />}>
                        <P.Project />
                    </Suspense>} />
                <Route
                    path="/admin/skills"
                    element={<Suspense
                        fallback={<Loading />}>
                        <P.Project />
                    </Suspense>} />
                <Route
                    path="/admin/testimonial"
                    element={<Suspense
                        fallback={<Loading />}>
                        <P.Project />
                    </Suspense>} />
                <Route
                    path="/admin/contact"
                    element={<Suspense
                        fallback={<Loading />}>
                        <P.Project />
                    </Suspense>} />
            </Route>
            {/* AdminRoutes  */}

            <Route path="*" element={
                <Suspense fallback={<Loading />}>
                    <P.NotFound />
                </Suspense>
            } />
        </Route>))
    //  RootLayout 

    return (
        <RouterProvider
            router={router} />
    )

}




export default Routing