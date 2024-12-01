import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}

  getClients(): Observable<User[]> {
    return this.http.get<User[]>(environment.BACKEND_URL + '/clients');
  }

  getClient(id: number): Observable<User> {
    return this.http.get<User>(environment.BACKEND_URL + '/clients/' + id);
  }

  delUser(id: number): Observable<any> {
    return this.http.delete(environment.BACKEND_URL + '/clients/' + id);
  }
}
