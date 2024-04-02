import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // importar el modulo en el app module
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(Endpoints.users);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(Endpoints.users, user); 
  }
}
