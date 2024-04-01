import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  interpolation = 'Este dato viene desde el archivo .ts';
  className = 'test';
  buttonDisabled = true;
  inputValue = '';
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(): void {
    this.buttonDisabled = !this.buttonDisabled;
  }
  clear(): void {
    this.inputValue = '';
  }
}
