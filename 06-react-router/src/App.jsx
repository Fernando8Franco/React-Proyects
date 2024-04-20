import { lazy, Suspense } from 'react'

import Page404 from './pages/404'

import { Router } from './Router'
import { Route } from './Route'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const AboutPage = lazy(() => import('./pages/About.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading..</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
