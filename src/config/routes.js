import LayoutBasic from '../layouts/layoutBasic'
// import LayoutAdmin from '../layouts/layoutAdmin'

import Home from '../pages/Home'
import Proyects from '../pages/Proyects'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'

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
  },
  {
    path: '/about',
    component: About,
    layout: LayoutBasic,
  },
  {
    path: '/login',
    component: Login,
    layout: LayoutBasic,
  },
]

const routesAdmin = [
  {
    path: '/admin',
    component: Home,
    layout: LayoutBasic,
  },
]

const routesOther = [
  {
    path: '*',
    component: NotFound,
    layout: LayoutBasic,
  },
]

export default [...routes, ...routesAdmin, ...routesOther]
