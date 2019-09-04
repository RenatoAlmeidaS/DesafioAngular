import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  input = {
    'data_inputs':true,
    'data_inputs_active': false
  }
  input_label = {
    'data_inputs_label':true
  }
  input_div = {
    'data_inputs_div':true
  }

  constructor() { }
  @Input() formControlName;

  ngOnInit() {
    console.log(this.formControlName)
  }

}
