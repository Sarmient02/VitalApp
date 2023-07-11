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
    loadChildren: () => import('./pages/main-user/main-home/main-home.module').then( m => m.MainHomePageModule)
  },
  {
    path: 'main-contacts',
    loadChildren: () => import('./pages/main-user/main-contacts/main-contacts.module').then( m => m.MainContactsPageModule)
  },
  {
    path: 'main-control',
    loadChildren: () => import('./pages/main-user/main-control/main-control.module').then( m => m.MainControlPageModule)
  },
  {
    path: 'support-home',
    loadChildren: () => import('./pages/support-user/support-home/support-home.module').then( m => m.SupportHomePageModule)
  },
  {
    path: 'support-contacts',
    loadChildren: () => import('./pages/support-user/support-contacts/support-contacts.module').then( m => m.SupportContactsPageModule)
  },
  {
    path: 'support-control',
    loadChildren: () => import('./pages/support-user/support-control/support-control.module').then( m => m.SupportControlPageModule)
  },
  {
    path: 'support-tabs',
    loadChildren: () => import('./pages/support-user/support-tabs/support-tabs.module').then( m => m.SupportTabsPageModule)
  },
  {
    path: 'main-tabs',
    loadChildren: () => import('./pages/main-user/main-tabs/main-tabs.module').then( m => m.MainTabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
