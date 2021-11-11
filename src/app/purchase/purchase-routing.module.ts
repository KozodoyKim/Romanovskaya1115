import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseAddComponent } from './purchase-add/purchase-add.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';

import { PurchaseLayoutComponent } from './purchase-layout/purchase-layout.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';

const routes: Routes = [
  {
    path:'',
    component: PurchaseLayoutComponent,
    children: [
      {path: '', component: PurchaseListComponent},
      {path: 'add', component: PurchaseAddComponent},
      {path: 'edit/:id', component: PurchaseEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
