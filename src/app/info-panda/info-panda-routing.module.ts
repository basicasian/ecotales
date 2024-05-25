import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPandaPage } from './info-panda.page';
import { ContributePandaPage } from '../contribute-panda/contribute-panda.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPandaPage
  },
  {
    path: 'contribute-panda',
    loadChildren: () => import('../contribute-panda/contribute-panda.module').then( m => m.ContributePandaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPandaPageRoutingModule {}
