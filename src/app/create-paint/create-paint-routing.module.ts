import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePaintPage } from './create-paint.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePaintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePaintPageRoutingModule {}
