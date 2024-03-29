import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { HistoricService } from '../../service/historic.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private historic: HistoricService) { }
  
  user$ = null;
  data$ = null;

  isLogged() {
    this.auth.userIsLogged().subscribe(
      e => {
        if(!e) {
          this.router.navigateByUrl('login');
        }
        else {
          this.user$=this.auth.getUser() //OBTEM DADO DE USUÁRIO SE ESTIVER LOGADO
          this.data$= this.historic.getData();
        }
      }
    )
  }

  ngOnInit() {
    this.isLogged();
  }

}
