import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsersCount() {
    return this.httpClient.get<any>("https://localhost:7032/api/User/get/count")
  }
}
