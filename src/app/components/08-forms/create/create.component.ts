import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnChanges {

  @Input() userSelected = new User();
  @Output() dataCreated = new EventEmitter<User>();
  form: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]],
        imageUrl: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userSelected) {
      this.form.controls.name.setValue(this.userSelected.name);
      this.form.controls.email.setValue(this.userSelected.email);
      this.form.controls.phone.setValue(this.userSelected.phone);
      this.form.controls.imageUrl.setValue(this.userSelected.image);
    }
  }

  save(): void {
    const user = new User();
    user.name = this.form.controls.name.value;
    user.email = this.form.controls.email.value;
    user.phone = this.form.controls.phone.value;
    user.image = this.form.controls.imageUrl.value;
    user.id = this.userSelected.id;
    this.dataCreated.emit(user);
    this.form.reset();
  }

}
