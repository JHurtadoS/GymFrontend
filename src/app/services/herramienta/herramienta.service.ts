import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { herramienta } from './interface';

@Injectable({
  providedIn: 'root',
})
export class HerramientaService {
  constructor(public http: HttpClient) {}

  url = 'https://localhost:7246/api';
  async getall(Controller: string) {
    let response: herramienta[] = [];
    await this.http
      .get<herramienta[]>(this.url + Controller)
      .toPromise()
      .then((res) => {
        response = res ? res : [];
      });
    return response;
  }
}
