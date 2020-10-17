import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDataPage } from './create-data.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDataPageRoutingModule {}
