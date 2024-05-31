import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoPandaPage } from './info-panda.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InfoPandaPageRoutingModule } from './info-panda-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    InfoPandaPageRoutingModule
  ],
  declarations: [InfoPandaPage]
})
export class InfoPandaPageModule {}
