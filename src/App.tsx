import * as L from '@/layout/index';
import * as P from '@/pages/index';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

function App() {

  //RootLayout
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<L.RootLayout />}>
      <Route index element={<P.Home />} />
      <Route path="*" element={<P.NotFound />} />


      {/* LogoutRoutes */}

      {/* LogoutRoutes */}


      {/* PrivateRoutes  */}

      {/* PrivateRoutes  */}

    </Route>))
  //  RootLayout 


  return (
    <RouterProvider
      router={router} />
  )
}

export default App