import { Component, OnInit, Input } from '@angular/core';
import { HistoricService } from 'src/app/service/historic.service';
import { Observable } from 'rxjs';
import { toMoney } from '../../utils/utils'

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {

  constructor() { }
  @Input()
  data$: Observable<any>= null;

  ngOnInit() {
  }

  currency(val) {
    return toMoney(val);
  }

}
