import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase } from 'src/app/shared/interfaces/pushchase.interface';
import { PurchaseService } from 'src/app/shared/services/purchase.service';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.css']
})
export class PurchaseEditComponent implements OnInit {

  purchaseForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required])
  })

  id: number | null = null;
  purchase! : Purchase;

  constructor(protected purchaseService: PurchaseService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.activatedRoute.params.subscribe(params =>
      {this.id = params.id ? +params.id : null})

      this.getData();
    
  
  }

  async getData()
  {
   try
   {
     this.purchase = await this.purchaseService.getPurchase(this.id);
 
   }
   catch(err)
   {console.log(err)}
 
   this.purchaseForm = new FormGroup({
     name: new FormControl(this.purchase.name, [Validators.required]),
     amount: new FormControl(this.purchase.amount, [Validators.required])
   })
  }
 
  onEditPurchase ()
   {
     let newPurchase: Purchase = 
     { 
       name: this.purchaseForm.get('name')?.value,
       amount: this.purchaseForm.get('amount')?.value,
       status: this.purchase.status
      };
     this.purchaseService.putPurchase(this.purchase.id, newPurchase);
     this.router.navigate(['purchase'])
   }
 
   close()
   {
     this.router.navigate(['purchase'])
   }
 
   async delete()
   {
     try
     {
      await this.purchaseService.deletePurchase(this.id)
     }
     catch(err)
     {console.log(err)}
 
     this.router.navigate(['purchase'])
   }
}
