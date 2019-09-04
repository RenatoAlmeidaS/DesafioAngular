import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {


  @Output() submitEvent = new EventEmitter<User>();
  constructor(private fb: FormBuilder) { }
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

  ngOnInit() { //FAZ A INSCRIÇÃO PARA RECONHECER O FOCUS DOS INPUTS
    this.subs(this.login.nativeElement);
    this.subs(this.password.nativeElement);
  }
  submit() { //ENVIA PARA O COMPONENTE PAI O USUÁRIO
    let user: User;
    user = {
      name:this.form.controls.login.value,
      password: this.form.controls.password.value
    }
    this.submitEvent.emit(user);
  }

  subs(e) { //CRIA OBSERVABLES PARA DETECTAR FOCUS
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
