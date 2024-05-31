import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateWritePageRoutingModule } from './create-write-routing.module';

import { CreateWritePage } from './create-write.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateWritePageRoutingModule
  ],
  declarations: [CreateWritePage]
})
export class CreateWritePageModule {}
