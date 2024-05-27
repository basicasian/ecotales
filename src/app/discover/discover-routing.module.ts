import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverPage } from './discover.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage
  },
  {
    path: 'tabs/tab2',
    loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'info/info-panda',
    loadChildren: () => import('../info-panda/info-panda.module').then(m => m.InfoPandaPageModule)
  }
  ,
  {
    path: 'contribute/contribute-panda',
    loadChildren: () => import('../contribute-panda/contribute-panda.module').then(m => m.ContributePandaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
