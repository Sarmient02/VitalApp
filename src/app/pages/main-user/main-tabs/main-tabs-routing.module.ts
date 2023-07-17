import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTabsPage } from './main-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: MainTabsPage,
    children : [
      {
        path: 'home',
        loadChildren: () => import('../main-home/main-home.module').then( m => m.MainHomePageModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('../main-contacts/main-contacts.module').then( m => m.MainContactsPageModule)
      },
      {
        path: 'contacts/add',
        loadChildren: () => import('../main-contact-add/main-contact-add.module').then( m => m.MainContactAddPageModule)
      },
      {
        path: 'contacts/edit',
        loadChildren: () => import('../main-contact-edit/main-contact-edit.module').then( m => m.MainContactEditPageModule)
      },
      {
        path: 'control',
        loadChildren: () => import('../main-control/main-control.module').then( m => m.MainControlPageModule)
      },
      {
        path: 'contacts/add',
        loadChildren: () => import('../main-contact-add/main-contact-add.module').then( m => m.MainContactAddPageModule)
      },
      {
        path: '',
        redirectTo: '/main-tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainTabsPageRoutingModule {}
