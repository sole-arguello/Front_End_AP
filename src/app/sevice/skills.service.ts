import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  //skiUrl = 'http://localhost:8080/ski/';
  skiUrl = 'https://porfolioweb.onrender.com/ski/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skiUrl + 'lista');
  }
  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.skiUrl + `detail/${id}`);
  }
  public save(skills: Skill): Observable<any> {
    return this.httpClient.post<any>(this.skiUrl + 'create', skills);
  }
  public update(id: number, skills: Skill): Observable<any> {
    return this.httpClient.put<any>(this.skiUrl + `update/${id}`, skills);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skiUrl + `delete/${id}`);
  }
}
