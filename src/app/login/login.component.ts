import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  disabled = true;
  constructor(private route: Router ) { }

  ngOnInit() {
  }

  onUpdateForm(event: any) {
    this.disabled = (this.username.length === 0) || (this.password.length === 0);
  }
  resetForm() {
    this.disabled = true;
    this.username = this.password = '' ;
  }
  loginForm() {
    console.log('Logged In');
    this.route.navigateByUrl('user');
  }



}
