import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/app-config';
import { Helpers } from '../helpers/helpers';
const API_URL = "api/token"
@Injectable()
export class TokenService{
    constructor(private _http: HttpClient, private _helper: Helpers){

    }
    authorize(data: any): any{
        let body = JSON.stringify(data);
        return this.getToken(body);
    }
    private getToken(body: any):Observable<any>{
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this._http.post<any>(AppConfig.appUrl + "/" + API_URL, body, this.header());
    }

    public header() {
        let header = new HttpHeaders({ 'Content-Type': 'application/json' });
        if(this._helper.isAuthenticated()) {
          header = header.append('Authorization', 'Bearer ' + this._helper.getToken()); 
        }
        return { headers: header };
      }
}