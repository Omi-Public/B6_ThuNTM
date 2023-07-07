import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  page = {
    title: 'Home',
    subtitle: 'Welcome!',
    content:'Some content'
  };

  constructor() { }

  ngOnInit() { }
}
