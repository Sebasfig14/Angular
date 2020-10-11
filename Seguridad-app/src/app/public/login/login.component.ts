import { SecurityService } from './../../services/security.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addressForm = this.fb.group({

    nombre: [null, Validators.required],
    password: [null, Validators.required],

  });




  constructor(
    private security: SecurityService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.security.login(this.addressForm.value).subscribe(
      (res) => {
        if (typeof res.token === 'undefined') {
          console.log(res.mensaje);
        } else {
          localStorage.setItem('token', res.token);
          this.router.navigate(['clientes']);
        }
      }, (err) => {
        console.log(err);
      }


    );
  }
}
