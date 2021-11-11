import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/shared/interfaces/pushchase.interface';
import { PurchaseService } from 'src/app/shared/services/purchase.service';


@Component({
  selector: 'app-purchase-card',
  templateUrl: './purchase-card.component.html',
  styleUrls: ['./purchase-card.component.css']
})
export class PurchaseCardComponent implements OnInit {
 
  @Input() purchase!: Purchase;
  @Output() changeStatus = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  constructor(  
    private purchaseService: PurchaseService, 
    private router: Router) { }

  ngOnInit(): void {

  }

 onChangeStatus (id: any)
 {
   this.changeStatus.emit(id);
 }

 edit()
 {
  this.router.navigate(['purchase/edit', this.purchase.id])
 }

 onDelete(id: any)
 {
  this.delete.emit(id);
 }
}
