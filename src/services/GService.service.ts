import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { PublicResponse } from '../models/publicResponse';
import { SubcriptionAndSupscriper } from '../models/subcriptionAndSupscriper';

@Injectable({
  providedIn: 'root'
})
export class GServiceService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  baseURL = environment.baseAddressForAPI;

  constructor(private httpClient: HttpClient) { }

  getAll(url: string): Observable<any > {
    return this.httpClient.get<any >(this.baseURL + url);
  }

  get(url: string): Observable<any > {
    return this.httpClient.get<any>(this.baseURL + url);
  }

  getById(url: string, id: number): Observable<PublicResponse> {
    return this.httpClient.get<PublicResponse>(this.baseURL + url + id);
  }


  add(url: string, body: any): Observable<any> {
    console.log('baseURL',this.baseURL)
    return this.httpClient.post<any>(this.baseURL + url, body, { headers: this.headers });
  }

  update(url: string, body: any): Observable<any> {
    return this.httpClient.patch<any>(this.baseURL + url, body, { headers: this.headers });
  }

  delete(url: string, id: any): Observable<any> {
    return this.httpClient.delete<any>(this.baseURL + url + id)
  }


  

}
