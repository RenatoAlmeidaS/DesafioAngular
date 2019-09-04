import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.scss']
})
export class TittleComponent implements OnInit {

  constructor(private auth: AuthService) { }
  user: User = null;
  ngOnInit() {
    this.auth.getUser().subscribe((e)=> {
      this.user = e;
    })
  }

}
