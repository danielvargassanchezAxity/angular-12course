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
  constructor() { }

  ngOnInit(): void {
  }

}
