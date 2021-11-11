import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseLayoutComponent } from './purchase-layout/purchase-layout.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseCardComponent } from './purchase-card/purchase-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PurchaseAddComponent } from './purchase-add/purchase-add.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';



@NgModule({
  declarations: [
    PurchaseLayoutComponent,
    PurchaseListComponent,
    PurchaseCardComponent,
    PurchaseAddComponent,
    PurchaseEditComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PurchaseModule { }
