import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  today = new Date();
  message = 'Hola que TAL';
  price = 12.99;
  items = ['BMW', 'NISSAN', 'TOYOTA']
  data = new Observable<string>();
  dataString = '';
  constructor() { }

  ngOnInit(): void {
  }

  setData(data: string): void {
    this.data = of(data);
  }

}
