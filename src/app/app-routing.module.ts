import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'main-home',
    loadChildren: () => import('./pages/main-user/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'support-home',
    loadChildren: () => import('./pages/support-user/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/support-user/control/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/support-user/control/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/main-user/control/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/main-user/control/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./pages/main-user/contacts/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/main-user/contacts/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/main-user/contacts/add/add.module').then( m => m.AddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
