import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Material } from '../interfaces/material';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialServiceService {

  private myAppUrl: string;
  private myApiUrl: string;


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/products/'

  }

  getListProducts(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveProduct(product: Material): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, product);
  }
}
