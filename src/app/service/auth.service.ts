import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLogged$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  login$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  user$: BehaviorSubject<User> = new BehaviorSubject(null);

  userIsLogged(): Observable<boolean> {
    return this.isLogged$.asObservable();
  }
  login(u): Observable<boolean> {
    this.login$.next(true) //SIMULANDO RESPOSTA DO SERVIDOR | NEXT - sim | ERROR - não
    this.isLogged$.next(true);
    sessionStorage.setItem('token', u.name);
    // this.login$.error(true);
    return this.login$.asObservable();
  }
  getUser(){
    let name = sessionStorage.getItem('token'); //Pega token
    this.user$.next({name: 'Renato', photo: '../../../assets/imgs/user.png'}) //Simula retorno com novas informações
    return this.user$.asObservable()
  }
}
