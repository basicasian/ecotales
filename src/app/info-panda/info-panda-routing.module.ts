import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPandaPage } from './info-panda.page';
import { SharePage } from '../share/share.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPandaPage
  },
  {
    path: 'contribute-panda',
    loadChildren: () => import('../share/share.module').then( m => m.SharePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPandaPageRoutingModule {}
