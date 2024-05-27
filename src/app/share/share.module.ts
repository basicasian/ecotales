import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharePageRoutingModule } from './share-routing.module';

import { SharePage } from './share.page';
import { ContainerViewPostComponentModule } from '../container-view-post/container-view-post.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharePageRoutingModule,
    ContainerViewPostComponentModule
  ],
  declarations: [SharePage]
})
export class SharePageModule {}
