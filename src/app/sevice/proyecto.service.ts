import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  //proUrl = 'http://localhost:8080/proyecto/';
  proUrl = 'https://porfolioweb.onrender.com/proyecto/';
  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.proUrl + 'lista');
  }
  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.proUrl + `detail/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.proUrl + 'create', proyecto);
  }
  public update(id: number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.proUrl + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proUrl + `delete/${id}`);
  }
}
