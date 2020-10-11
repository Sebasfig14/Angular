import { DetalleService } from './../../services/detalle.service';
import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/Factura';
import { Cliente } from 'src/app/models/cliente';
import { Detalle } from 'src/app/models/Detalle';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  factura: Factura;
  cliente: Cliente;
  detalle: Detalle[];
  displayedColumns = ['id','producto','cantidad','sub total','creado por'];
  constructor(private detallefactura: DetalleService) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('cliente'));
    this.factura = JSON.parse(localStorage.getItem('factura'));
    this.detallefactura.GetDetalle(this.factura.id).subscribe(
      (res) => {
        this.detalle = res;
      }
    )
  }
}
