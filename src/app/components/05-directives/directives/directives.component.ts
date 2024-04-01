import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  showMessage = false;
  products = ['Manzana', 'Pera', 'Aguacate', 'Tortillas', 'Queso'];
  vegetables = ['Zanahoria', 'Lechuga', 'Brocoli'];
  fruits = ['Manzana', 'Pera', 'Platano'];
  selectedoption = 'fruits';
  users = [
    {
      userId: 0,
      name: "Daniel",
      age: 27,
    },
    {
      userId: 1,
      name: "Erika",
      age: 21,
    },
    {
      userId: 2,
      name: "Pedro",
      age: 30,
    },
  ];

  isWarning = false;
  constructor() { }

  ngOnInit(): void {
  }

}
