import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.scss']
})
export class UserIdComponent implements OnInit {

  user = new User();
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let data = this.route.snapshot.data['user'];
    this.user = data;
  }

}
