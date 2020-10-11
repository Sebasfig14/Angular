import { Cliente } from 'src/app/models/cliente';
import { FacturaService } from './../../services/factura.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/models/Factura';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  facturas: Factura[];
  displayedColumns = ['id','empleado','fecha','total','estado','detalle'];
  constructor(private serviceFactura: FacturaService, private routes: Router) { }
  cliente: Cliente;
  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('cliente'));
    this.serviceFactura.GetFacturas(this.cliente.id).subscribe(
      (res) => {
        this.facturas = res;
      }
    )
  }
  Oncapturar(item:Factura): void{
    localStorage.setItem('factura',JSON.stringify(item));
    this.routes.navigate(['clientes/factura/detalle'])
  }

}
