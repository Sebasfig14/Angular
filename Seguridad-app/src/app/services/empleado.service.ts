import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private URL = 'http://localhost:3000/';
  constructor(private httpCliente: HttpClient) { }

  getEmpleado(){
    return this.httpCliente.get<Empleado[]>(this.URL + 'empleados');

  }
}
