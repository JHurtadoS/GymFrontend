import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { evento } from './interface';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  constructor(public http: HttpClient) {}

  url = 'https://localhost:7246/api';
  async getall(Controller: string) {
    let response: evento[] = [];
    await this.http
      .get<evento[]>(this.url + Controller)
      .toPromise()
      .then((res) => {
        response = res ? res : [];
      });
    return response;
  }
}
