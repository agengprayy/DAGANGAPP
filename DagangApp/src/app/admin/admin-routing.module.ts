import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'edit/:barangId',
    loadChildren: () => import('./edit-data/edit-data.module').then( m => m.EditDataPageModule)
  },
  {
    path: 'create-data',
    loadChildren: () => import('./create-data/create-data.module').then( m => m.CreateDataPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
