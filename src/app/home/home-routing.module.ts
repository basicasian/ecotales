import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'tabs/tab2',
    loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'info/info-panda',
    loadChildren: () => import('../info-panda/info-panda.module').then(m => m.InfoPandaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
