import { lazy } from 'react'
interface Paths {
  path: string;
  exact?: boolean;
  name:string;
  component: any;
  iconName?: string
}

export const adminPaths: Paths[] = [
  {
    path: '',
    name: 'Dashboard',
    exact: true,
    component: lazy(() => import('../views/Dashboard'))
  },
  {
    path: 'inventory',
    name: 'Inventory',
    exact: false,
    component: lazy(() => import('../views/Inventory'))
  },
  {
    path: 'user',
    name: 'User',
    exact: false,
    component: lazy(() => import('../views/users'))
  },
  {
    path: 'inventory/item',
    name: 'Item',
    exact: false,
    component: lazy(() => import('../views/Items'))
  }
]
