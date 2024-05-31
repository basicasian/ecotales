import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePaintPage } from './create-paint.page';
import { HomePage } from '../home/home.page';
import { SharePage } from '../share/share.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePaintPage
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'share',
    component: SharePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePaintPageRoutingModule {}
