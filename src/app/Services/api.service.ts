import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) { }

  url = 'https://localhost:7292/api/';
  async Get(Controller: string) {
    console.log(this.url + Controller);
    var response: any;

    await this.http.get(this.url + Controller).toPromise().then(res => {
      console.log(res);
      response = res;
    });
    return response;
  }

  async Post(Controller: string, body: any) {
    var response: any;

    await this.http.post(this.url + Controller, body).subscribe(res => {
      console.log(res);
      response = res;
    });
    return response;
  }

  async Put(Controller: string, id: string, body: any) {
    var response: any;

    await this.http.put(this.url + Controller + "/" + id, body).subscribe(res => {
      console.log(res);
      response = res;
    });
    return response;
  }

  async Delete(Controller: string, id: string) {
    var response: any;

    await this.http.delete(this.url + Controller + "/" + id).subscribe(res => {
      console.log(res);
      response = res;
    });
    return response;
  }

}

