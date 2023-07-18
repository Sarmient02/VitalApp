import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/main-user/main-tabs/main-tabs.module').then( m => m.MainTabsPageModule)
  },
  {
    path: '',
    redirectTo: 'main-tabs',
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
    path: 'main-contact-add',
    loadChildren: () => import('./pages/main-user/main-contact-add/main-contact-add.module').then( m => m.MainContactAddPageModule)
  },
  {
    path: 'main-contact-edit',
    loadChildren: () => import('./pages/main-user/main-contact-edit/main-contact-edit.module').then( m => m.MainContactEditPageModule)
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
  {
    path: 'main-contact-add',
    loadChildren: () => import('./pages/main-user/main-contact-add/main-contact-add.module').then( m => m.MainContactAddPageModule)
  },
  {
    path: 'main-contact-edit',
    loadChildren: () => import('./pages/main-user/main-contact-edit/main-contact-edit.module').then( m => m.MainContactEditPageModule)
  },
  {
    path: 'main-alert',
    loadChildren: () => import('./pages/main-user/main-alert/main-alert.module').then( m => m.MainAlertPageModule)
  },
  {
    path: 'start-screen',
    loadChildren: () => import('./pages/login/start-screen/start-screen.module').then( m => m.StartScreenPageModule)
  },
  {
    path: 'login-screen',
    loadChildren: () => import('./pages/login/login-screen/login-screen.module').then( m => m.LoginScreenPageModule)
  },
  {
    path: 'registration-screen',
    loadChildren: () => import('./pages/login/registration-screen/registration-screen.module').then( m => m.RegistrationScreenPageModule)
  },
  {
    path: 'main-synchronize',
    loadChildren: () => import('./pages/main-user/main-synchronize/main-synchronize.module').then( m => m.MainSynchronizePageModule)
  },
  {
    path: 'main-pressure-history',
    loadChildren: () => import('./pages/main-user/main-pressure-history/main-pressure-history.module').then( m => m.MainPressureHistoryPageModule)
  },
  {
    path: 'registration-type-screen',
    loadChildren: () => import('./pages/login/registration-type-screen/registration-type-screen.module').then( m => m.RegistrationTypeScreenPageModule)
  },
  {
    path: 'main-config',
    loadChildren: () => import('./pages/main-user/main-config/main-config.module').then( m => m.MainConfigPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
