import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContainerViewPostComponent } from './container-view-post.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ContainerViewPostComponent],
  exports: [ContainerViewPostComponent]
})
export class ContainerViewPostComponentModule {}
