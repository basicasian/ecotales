import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContributePandaPageRoutingModule } from './contribute-panda-routing.module';

import { ContributePandaPage } from './contribute-panda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContributePandaPageRoutingModule
  ],
  declarations: [ContributePandaPage]
})
export class ContributePandaPageModule {}