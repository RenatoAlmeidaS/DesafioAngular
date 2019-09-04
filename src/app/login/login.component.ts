import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
   submit(user) {
/*     let user: User;
    user = {
      name:this.form.controls.login.value,
      password: this.form.controls.password.value
    } */
    this.auth.login(user).subscribe(
      (e) => {console.log('Pode logar'); this.router.navigateByUrl('')},
      (err) => {console.log('Não pode logar')} 
    )
    }

}
