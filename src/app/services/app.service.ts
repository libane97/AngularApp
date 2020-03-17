import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private  http: HttpClient) { }

  get(url: string) {
     return this.http.get(url);
  }
  del(url: string) {
       return this.http.delete(url);
  }
  modi(url: string, obj: any) {
      return this.http.put(url, obj);
  }
  ajoute(url: string, obj: any) {
       return this.http.post(url, obj, {responseType: 'json', headers: {'Content-Type': 'application/json', Accept: 'application/json'}});
  }
}
