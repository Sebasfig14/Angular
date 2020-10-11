import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../models/Factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  GetFacturas(id): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.url + 'clientes/' + id + '/facturas');
  }
}
