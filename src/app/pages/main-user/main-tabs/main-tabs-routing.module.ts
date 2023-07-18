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
        children: [
          { path: '', loadChildren: () => import('../main-home/main-home.module').then( m => m.MainHomePageModule) },
          { path: 'alert', loadChildren: () => import('../main-alert/main-alert.module').then( m => m.MainAlertPageModule) },
          { path: 'config', loadChildren: () => import('../main-config/main-config.module').then( m => m.MainConfigPageModule) },
        ]
      },
      {
        path: 'contacts',
        children: [
          { path: '', loadChildren: () => import('../main-contacts/main-contacts.module').then( m => m.MainContactsPageModule) },
          { path: 'edit', loadChildren: () => import('../main-contact-edit/main-contact-edit.module').then( m => m.MainContactEditPageModule) },
          { path: 'add', loadChildren: () => import('../main-contact-add/main-contact-add.module').then( m => m.MainContactAddPageModule) },
        ]
      },
      {
        path: 'control',
        children: [
          { path: '', loadChildren: () => import('../main-control/main-control.module').then( m => m.MainControlPageModule) },
          { path: 'history', loadChildren: () => import('../main-pressure-history/main-pressure-history.module').then( m => m.MainPressureHistoryPageModule) },
          { path: 'synchronize', loadChildren: () => import('../main-synchronize/main-synchronize.module').then( m => m.MainSynchronizePageModule) },
        ]
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
