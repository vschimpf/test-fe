import MainLayout from './MainLayout'
import searchLayoutRoute from './components/search/route.js'
import resultsRoute from './components/results/route.js'
import detailsRoute from './components/details/route.js'

export default {
  path: '/',
  name: 'Main Layout',
  component: MainLayout,
  redirect: { name: 'Search Layout' },
  children: [
    searchLayoutRoute,
    resultsRoute,
    detailsRoute
  ]
}
