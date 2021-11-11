import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/shared/interfaces/pushchase.interface';
import { PurchaseService } from 'src/app/shared/services/purchase.service';


@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrls: ['./purchase-add.component.css']
})
export class PurchaseAddComponent implements OnInit {

  purchaseForm!: FormGroup;

  constructor(protected purchaseService: PurchaseService,
    private router: Router) { }

  ngOnInit(): void
  {
    this.purchaseForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required])
    })
  }

 async onAddPurchase ()
  {
    let newPurchase: Purchase =
    {
      name: this.purchaseForm.get('name')?.value,
      amount: this.purchaseForm.get('amount')?.value,
      status: "Не куплено"
     };

     try
     {
     await this.purchaseService.postPurchase(newPurchase);
     }
     catch(err)
     {console.log(err)}

    this.router.navigate(['purchase'])
  }

  close()
  {
    this.router.navigate(['purchase'])
  }
}
