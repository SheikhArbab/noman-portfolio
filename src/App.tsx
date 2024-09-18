import * as L from '@/layout/index';
import * as P from '@/pages/index';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

function App() {

  //RootLayout
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<L.RootLayout />}>

      {/* UserRoutes  */}
      <Route path='/' element={<L.UserLayout />}>
        <Route index element={<P.Home />} />
      </Route>
      {/* UserRoutes  */}



      {/* LogOutRoutes  */}
      <Route path='/' element={<L.LogOutLayout />}>
        <Route path="/login" element={<P.Login />} />
      </Route>
      {/* LogOutRoutes  */}

      {/* AdminRoutes  */}
      <Route path='/dashboard' element={<L.AdminLayout />}>
        <Route path="/dashboard/" element={<h1>private</h1>} />
      </Route>
      {/* AdminRoutes  */}

      <Route path="*" element={<P.NotFound />} />
    </Route>))
  //  RootLayout 


  return (
    <RouterProvider
      router={router} />
  )
}

export default App




