import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-can-active-test',
  templateUrl: './can-active-test.component.html',
  styleUrls: ['./can-active-test.component.scss']
})
export class CanActiveTestComponent implements OnInit {

  isAuth = true;
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.isAuth = this.authService.getIsAuth();
  }

  changeAuth(): void {
    this.authService.setIsAuth(!this.authService.getIsAuth());
    this.isAuth = this.authService.getIsAuth();
  }

  goToProtectedRoute(): void {
    this.router.navigate(['protected']);
  }
}
