import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportTabsPage } from './support-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: SupportTabsPage,
    children:[
      {
        path: 'home',
        children: [
          { path: '', loadChildren: () => import('../support-home/support-home.module').then( m => m.SupportHomePageModule) },
          { path: 'alert', loadChildren: () => import('../support-alert/support-alert.module').then( m => m.SupportAlertPageModule) },
          { path: 'config',
            children: [
              { path: '', loadChildren: () => import('../support-config/support-config.module').then( m => m.SupportConfigPageModule) },
              { path: 'edit', loadChildren: () => import('../support-config-edit/support-config-edit.module').then( m => m.SupportConfigEditPageModule) },
            ]
        },
        ]
      },
      {
        path: 'contacts',
        children: [
          { path: '', loadChildren: () => import('../support-contacts/support-contacts.module').then( m => m.SupportContactsPageModule) },
          { path: 'edit', loadChildren: () => import('../support-contact-edit/support-contact-edit.module').then( m => m.SupportContactEditPageModule) },
          { path: 'add', loadChildren: () => import('../support-contact-add/support-contact-add.module').then( m => m.SupportContactAddPageModule) },
        ]
      },
      {
        path: 'control',
        children: [
          { path: '', loadChildren: () => import('../support-control/support-control.module').then( m => m.SupportControlPageModule) },
          { path: 'history', loadChildren: () => import('../support-pressure-history/support-pressure-history.module').then( m => m.SupportPressureHistoryPageModule) },
          //{ path: 'synchronize', loadChildren: () => import('../main-synchronize/main-synchronize.module').then( m => m.MainSynchronizePageModule) },
        ]
      },
      {
        path: '',
        redirectTo: '/support-tabs/home',
        pathMatch: 'full'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportTabsPageRoutingModule {}
