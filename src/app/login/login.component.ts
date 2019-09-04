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

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  //CSS USED
  btn = {
    'btn_flag_enabled': true
  }
  input1 = {
    'data_inputs':true,
    'data_inputs_active': false
  }
  input2 = {
    'data_inputs':true,
    'data_inputs_active': false
  }
  input_label1 = {
    'data_inputs_label':true,
    'data_inputs_label_focus': false,
    'data_inputs_label_transform': false
  }
  input_label2 = {
    'data_inputs_label':true,
    'data_inputs_label_focus': false,
    'data_inputs_label_transform': false
  }
  input_div = {
    'data_inputs_div':true
  }

  //FORM
  form = this.fb.group({
    login: ['', [ Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  //VAR
  @ViewChild('login', {static:true})
  private login: ElementRef;
  @ViewChild('pass', {static:true})
  private password: ElementRef;

  ngOnInit() {
    this.subs(this.login.nativeElement);
    this.subs(this.password.nativeElement);
  }
  submit() {
    let user: User;
    user = {
      name:this.form.controls.login.value,
      password: this.form.controls.password.value
    }
    this.auth.login(user).subscribe(
      (e) => {console.log('Pode logar'); this.router.navigateByUrl('')},
      (err) => {console.log('Não pode logar')}
    )
  }









  subs(e) {
    let onfocus = fromEvent(e, 'focus');
    let subscription = onfocus.subscribe(() => {
      if (e.name === 'login') {
        this.input1.data_inputs_active=true
        this.input_label1.data_inputs_label_focus=true
        this.input_label1.data_inputs_label_transform=true
      }
      else {
        this.input2.data_inputs_active=true
        this.input_label2.data_inputs_label_focus=true
        this.input_label2.data_inputs_label_transform=true
      } 
      let onfocusout = fromEvent(e, 'focusout')
      let subscription2 = onfocusout.subscribe(() => {
        if (e.name === 'login') {
          if (e.value !== '') {
            this.input1.data_inputs_active=false
            this.input_label1.data_inputs_label_focus=false
            this.input_label1.data_inputs_label_transform=true
          }
          else {
            this.input1.data_inputs_active=false
            this.input_label1.data_inputs_label_focus=false
            this.input_label1.data_inputs_label_transform=false
          }
        }
        else {
          if (e.value !== '') {
            this.input2.data_inputs_active=false
            this.input_label2.data_inputs_label_focus=false
            this.input_label2.data_inputs_label_transform=true
          }
          else {
            this.input2.data_inputs_active=false
            this.input_label2.data_inputs_label_focus=false
            this.input_label2.data_inputs_label_transform=false
          }
        }
        subscription.unsubscribe();
        subscription2.unsubscribe();
      })
    })
  }

}
