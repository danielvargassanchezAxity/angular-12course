import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from './users.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private userService: UsersService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const perfilId = route.paramMap.get('id');
    return this.userService.getById(perfilId ?? "");
  }
}
