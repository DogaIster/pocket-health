import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientInfoService {
  baseUrl = '/api/subscribeconfirm';

  constructor(private http: HttpClient) {
  }

  public addClientInfo(clientInfo: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, clientInfo)
  }
}
