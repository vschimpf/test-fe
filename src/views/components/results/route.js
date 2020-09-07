import Results from './Results'

export default {
  path: 'items',
  name: 'Results',
  component: Results,
  props: (routerVal) => {
    return { search: routerVal.query.search }
  }
}
