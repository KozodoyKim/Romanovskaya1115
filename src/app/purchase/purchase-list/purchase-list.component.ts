import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/shared/interfaces/pushchase.interface';
import { PurchaseService } from 'src/app/shared/services/purchase.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {

  purchases!: Purchase[];

  purchasesFree: Purchase[] = [];
  purchasesNotFree: Purchase[] = [];

  constructor(
    private purchaseSevice: PurchaseService,
    private router: Router
  ) { }

  ngOnInit(): void
  {
    this.getData();
  }

  async getData()
  {
    this.purchasesFree = []
    this.purchasesNotFree = []

    try
   {
      this.purchases = await this.purchaseSevice.getPurchases();
   }
    catch(error) {console.log(error)}

   for (let item of this.purchases)
   {
     if (item.status == "Не куплено")
     this.purchasesFree.push(item)
     else
     this.purchasesNotFree.push(item)
   }
   this.purchasesFree = this.purchasesFree.sort( function(first, second) { if(first.name < second.name) {return -1} else {return 1}} )
   this.purchasesNotFree = this.purchasesNotFree.sort( function(first, second) { if(first.name < second.name) {return -1} else {return 1}})
  }

  linkToAdd()
  {
      this.router.navigate([this.router.url, 'add'])
  }
  linkToEdit()
  {
      this.router.navigate([this.router.url, 'edit/:id'])
  }

  async changePurchaseStatus(id: any)
  {
    if( this.purchases[id].status == "Куплено")
    this.purchases[id].status = "Не куплено"
    else
    this.purchases[id].status = "Куплено"

    try
    {
     await this.purchaseSevice.putPurchase(id, this.purchases[id])
    }
    catch(err)
    {console.log(err)}


    this.getData()
  }

 async deletePurchase(id: any)
  {
    try
    {
     await this.purchaseSevice.deletePurchase(id)
    }
    catch(err)
    {
      console.log(err)
    }
    this.getData();
  }
}
