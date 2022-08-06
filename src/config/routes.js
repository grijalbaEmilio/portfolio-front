import LayoutBasic from '../layouts/layoutBasic'

import Home from '../pages/Home'
import Proyects from '../pages/Proyects'
import About from '../pages/About'

const routes = [
  {
    path: '/',
    component: Home,
    layout: LayoutBasic,
  },
  {
    path: '/proyects',
    component: Proyects,
    layout: LayoutBasic,
  }, {
    path: '/about',
    component: About,
    layout: LayoutBasic,
  },
]

export default routes
