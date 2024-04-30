import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProfilesPage } from './pages/ProfilesPage'
import NotFoundPage from './pages/NotFoundPage'
import './index.css'
import { ProfilePage } from './pages/ProfilePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/profiles',
    element: <ProfilesPage/>,
    children: [
      {
        path: '/profiles/:profileId',
        element: <ProfilePage/>
      }
    ]
  }
],
{
  basename: '/course-hub'
}
)

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
