import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from './interface';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor(public http: HttpClient) {}

  url = 'https://localhost:7246/api';
  async getall(Controller: string) {
    let response: persona[] = [];
    await this.http
      .get<persona[]>(this.url + Controller)
      .toPromise()
      .then((res) => {
        response = res ? res : [];
      });
    return response;
  }
}
