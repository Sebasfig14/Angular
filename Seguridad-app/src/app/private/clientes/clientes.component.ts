import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService: ClienteService, private routes: Router) { }

  displayedColumns = ['id', 'nombre', 'direccion', 'nit', 'creado_por', 'facturas'];
  clientes: Cliente[];
  ngOnInit(): void {
    localStorage.removeItem('cliente');
    this.clienteService.getCliente().subscribe(
      res => {
        this.clientes = res;
      }
    )
  }
  Oncapturar(item: Cliente): void {
    localStorage.setItem('cliente', JSON.stringify(item));
    this.routes.navigate(['clientes/factura'])

  }


}
