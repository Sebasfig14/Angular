import { EmpleadoService } from './../../services/empleado.service';
import { Empleado } from './../../models/empleado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadoservice: EmpleadoService) { }

  empleado: Empleado[];
  displayedColumns = ['id','nombre','codigo','salario'];


  ngOnInit(): void {
    this.empleadoservice.getEmpleado().subscribe(
      res =>{
          this.empleado = res;
      }
    )
  }

}
