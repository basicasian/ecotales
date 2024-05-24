import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPandaPage } from './info-panda.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPandaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPandaPageRoutingModule {}
