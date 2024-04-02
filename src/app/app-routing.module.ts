import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/01-component/first/first.component';
import { DatabindingComponent } from './components/02-databinding/databinding/databinding.component';
import { ParentComponent } from './components/03-componentes-comunication/parent/parent.component';
import { PipesComponent } from './components/05-pipes/pipes/pipes.component';
import { DirectivesComponent } from './components/06-directives/directives/directives.component';
import { UsersComponent } from './components/07-services/users/users.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
