import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalle } from '../models/Detalle';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  private url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  GetDetalle(id): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(this.url + 'facturas/' + id + '/productos');
  }
}
