import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePaintPageRoutingModule } from './create-paint-routing.module';

import { CreatePaintPage } from './create-paint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePaintPageRoutingModule
  ],
  declarations: [CreatePaintPage]
})
export class CreatePaintPageModule {}
