import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/01-component/first/first.component';
import { DatabindingComponent } from './components/02-databinding/databinding/databinding.component';
import { ParentComponent } from './components/03-componentes-comunication/parent/parent.component';
import { PipesComponent } from './components/05-pipes/pipes/pipes.component';
import { DirectivesComponent } from './components/06-directives/directives/directives.component';
import { UsersComponent } from './components/07-services/users/users.component';
import { CanActiveTestComponent } from './components/10-guards/can-active-test/can-active-test.component';
import { ProtectedComponent } from './components/10-guards/protected/protected.component';
import { AuthGuard } from './guards/auth.guard';
import { UserIdComponent } from './components/11-resolver/user/user-id.component';
import { UserResolver } from './services/user.resolver';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'databinding',
    component: DatabindingComponent
  },
  {
    path: 'comunication',
    component: ParentComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'crud',
    component: UsersComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import("./components/09-lazy-loading/first-page/first-page.module").then(m => m.FirstPageModule)
  },
  {
    path: 'guards',
    component: CanActiveTestComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'resolver/:id',
    component: UserIdComponent,
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
