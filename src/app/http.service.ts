import { Injectable } from '@angular/core';
import { environment as e } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  createZone(body: any) {
    return this.http.post(e.URL + '/zones', body);
  }
}
