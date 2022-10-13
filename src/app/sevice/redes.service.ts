/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

  constructor() { }
}*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../model/redes';

@Injectable({
  providedIn: 'root',
})
export class RedesService {
 // redUrl = 'http://localhost:8080/red/';
 redUrl = ' https://back-end-msa.herokuapp.com/red/';

  /*deploy*/
  //redUrl = 'https://backend-arpr.herokuapp.com/red/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Redes[]> {
    return this.httpClient.get<Redes[]>(this.redUrl + 'lista');
  }

  public detail(id: number): Observable<Redes> {
    return this.httpClient.get<Redes>(this.redUrl + `detail/${id}`);
  }

  public save(redes: Redes): Observable<any> {
    return this.httpClient.post<any>(this.redUrl + 'create', redes);
  }

  public update(id: number, redes: Redes): Observable<any> {
    return this.httpClient.put<any>(this.redUrl + `update/${id}`, redes);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.redUrl + `delete/${id}`);
  }
}
