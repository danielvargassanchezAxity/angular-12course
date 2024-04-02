import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/01-component/first/first.component';
import { DatabindingComponent } from './components/02-databinding/databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './components/03-componentes-comunication/parent/parent.component';
import { ChildComponent } from './components/03-componentes-comunication/child/child.component';
import { PipesComponent } from './components/05-pipes/pipes/pipes.component';
import { CreditCardPipe } from './components/05-pipes/credit-card.pipe';
import { DirectivesComponent } from './components/06-directives/directives/directives.component';
import { UsersComponent } from './components/07-services/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/08-forms/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FirstPageComponent } from './components/09-lazy-loading/first-page/first-page.component';
import { CanActiveTestComponent } from './components/10-guards/can-active-test/can-active-test.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DatabindingComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    CreditCardPipe,
    DirectivesComponent,
    UsersComponent,
    CreateComponent,
    CanActiveTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
