import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regis = {
    username: 'Home',
    password: 'Welcome!',
    content:'Some content'
  };

  constructor() { }

  ngOnInit() { }
}
