import { Injectable } from '@angular/core';
import { data } from './data.js'
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricService {


  
  constructor() { 
  }
  data$: BehaviorSubject<any> = new BehaviorSubject(null);

  getData() {
    setTimeout(()=> {this.data$.next(data)}, 2000) //atraso simulando conexão
    return this.data$.asObservable();
  }
}
/* 
constructor(private http: HttpClient) { 
}
readonly url ='https://jsonplaceholder.typicode.com/todos';

data$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);

errorHandler() {
  return ({
    next: e => console.log(e),
    error: err => throwError(err),
    complete: () => console.log('Data baixado')
  })
}

getData():Observable<any[]>{
  if (!this.dLoaded){
    this.http.get<any[]>(`${this.url}/`).pipe(tap(this.errorHandler()
    )).subscribe(this.data$);
    this.dLoaded=true;
  }
  return this.data$.asObservable();
} */