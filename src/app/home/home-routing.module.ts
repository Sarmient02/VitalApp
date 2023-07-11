import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children : [
      {
        path: 'home',
        loadChildren: () => import('../pages/main-user/main-home/main-home.module').then( m => m.MainHomePageModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('../pages/main-user/main-contacts/main-contacts.module').then( m => m.MainContactsPageModule)
      },
      {
        path: 'control',
        loadChildren: () => import('../pages/main-user/main-control/main-control.module').then( m => m.MainControlPageModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
