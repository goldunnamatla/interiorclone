import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = "https://sheetdb.io/api/v1/1hfimwph3muyw";
  constructor(private http: HttpClient) { }
  registeruser(data:any) :Observable<any>{
    return this.http.post(this.url,{data:[data]});
  }
}
