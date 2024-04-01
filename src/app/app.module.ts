import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/01-component/first/first.component';
import { DatabindingComponent } from './components/02-databinding/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/03-componentes-comunication/parent/parent.component';
import { ChildComponent } from './components/03-componentes-comunication/child/child.component';
import { PipesComponent } from './components/04-pipes/pipes/pipes.component';
import { CreditCardPipe } from './components/04-pipes/credit-card.pipe';
import { DirectivesComponent } from './components/05-directives/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DatabindingComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    CreditCardPipe,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
