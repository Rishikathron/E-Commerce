import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }

  getAllProducts():any{
    return this.http.get<any[]>('https://fakestoreapi.com/products');
  }
}
