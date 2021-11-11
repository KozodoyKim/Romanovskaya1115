import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Purchase } from '../interfaces/pushchase.interface';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  getPurchases(): Promise<Purchase[]>
{
  return this.http
  .get<Purchase[]>(`${environment.apiUrl}purchases`)
  .toPromise();
}

getPurchase(id: number | null): Promise<Purchase>
{
  return this.http
  .get<Purchase>(`${environment.apiUrl}purchases/${id}`)
  .toPromise();
}

postPurchase(data: Purchase) : Promise<Purchase>
{
  return this.http
  .post<Purchase>(`${environment.apiUrl}purchases`, data)
  .toPromise();
}

putPurchase(id: number, data: Purchase) : Promise<Purchase>
{
  return this.http
  .put<Purchase>(`${environment.apiUrl}purchases/${id}`, data)
  .toPromise();
}

deletePurchase(id: number | null) : Promise<Purchase>
{
  return this.http
  .delete<Purchase>(`${environment.apiUrl}purchases/${id}`)
  .toPromise();
}

}


