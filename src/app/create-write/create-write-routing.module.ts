import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateWritePage } from './create-write.page';

const routes: Routes = [
  {
    path: '',
    component: CreateWritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateWritePageRoutingModule {}
