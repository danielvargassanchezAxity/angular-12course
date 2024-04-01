import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  message = 'Hola que tal';
  color = 'red';
  constructor() { }

  ngOnInit(): void {
  }

  changeMessage(event: string): void {
    this.message = event;
  }

}
