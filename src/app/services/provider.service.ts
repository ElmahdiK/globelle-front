import { Injectable } from '@angular/core';
import { Provider } from '../models/provider';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  constructor(public http: HttpClient) { }

  getPrestataires(): Observable<Provider[]> {
    return this.http.get<Provider[]>(environment.BACKEND_URL + '/providers');
  }

  getPrestataire(id: number): Observable<Provider> {
    return this.http.get<Provider>(environment.BACKEND_URL + '/providers/' + id);
  }

  getServices(id: number): Observable<Service[]> {
    return this.http.get<Service[]>(environment.BACKEND_URL + '/providers/' + id + '/services');
  }
}
