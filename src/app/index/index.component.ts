import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit() {
    this.auth.userIsLogged().subscribe(
      e => {
        if(!e) {
          this.router.navigateByUrl('login');
        }
      }
    )
  }

}
