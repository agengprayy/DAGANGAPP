import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDataPageRoutingModule } from './create-data-routing.module';

import { CreateDataPage } from './create-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDataPageRoutingModule
  ],
  declarations: [CreateDataPage]
})
export class CreateDataPageModule {}
