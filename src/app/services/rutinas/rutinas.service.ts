import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rutina } from './interface';

@Injectable({
  providedIn: 'root',
})
export class RutinasService {
  constructor(public http: HttpClient) {}

  url = 'https://localhost:7292/api/';
  async getall(Controller: string) {
    console.log(this.url + Controller);
    let response: any;

    await this.http
      .get<any>(this.url + Controller)
      .toPromise()
      .then((res) => {
        console.log(res);
        response = res;
      });
    return response;
  }
}
