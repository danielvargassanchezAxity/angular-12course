import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  // templateUrl: './first.component.html',
  template: `
  <div class="first-content">
    <h1>Hola que tal yo soy el primer componente creado desde angular.</h1> 
  </div>
  `,
  styles: [`
    .first-content {
      display: flex !important;
      justify-content: center !important;
      background-color: #d3d3d3;
    }
    `
  ],
  // styleUrls: ['./first.component.scss'],

})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
