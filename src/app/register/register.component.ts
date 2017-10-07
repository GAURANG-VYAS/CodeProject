import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  disabled = true;
  first_name= '';
  last_name= '';
  username= '';
  email= '';
  password= '';
  passtype= '';
  passclass= 'passtype-red';
  fname= 'glyphicon glyphicon-pencil';
  lname= 'glyphicon glyphicon-pencil';
  eml = 'glyphicon glyphicon-pencil';
  pass = 'glyphicon glyphicon-pencil';
  uname = 'glyphicon glyphicon-pencil';

  constructor() {
  }
  ngOnInit() {
  }
  onUpdateForm(event: any) {
    this.disabled = (this.first_name.length === 0) || (this.last_name.length === 0) ||
      (this.username.length === 0) || (this.email.length === 0) ||
      (this.password.length === 0);

    const x = event.target;
    const id = String(x.id);
    if (id === 'password') {
      console.log('Here');
      if (this.password.length < 8) {
        console.log('weak');
        this.passtype = 'weak';
        this.passclass = 'passtype-red';
      }else if (this.password.length <= 15) {
        console.log('okay');
        this.passtype = 'okay';
        this.passclass = 'passtype-yellow';
      }else {
            console.log('strong');
            this.passtype = 'strong';
            this.passclass = 'passtype-green';
      }
      if (this.password.length === 0) {
        this.passtype = ' ';
      }
    }
    if (id === 'first_name') {
      if (this.first_name.length > 0) {
        this.fname = 'glyphicon glyphicon-ok';
      } else {
        this.fname = 'glyphicon glyphicon-pencil';
      }
    }

    if (id === 'last_name') {
      if (this.last_name.length > 0) {
        this.lname = 'glyphicon glyphicon-ok';
      } else {
        this.lname = 'glyphicon glyphicon-pencil';
      }
    }

    if (id === 'username') {
      if (this.username.length > 0) {
        this.uname = 'glyphicon glyphicon-ok';
      } else {
        this.uname = 'glyphicon glyphicon-pencil';
      }
    }
    if (id === 'email') {
      if (this.email.length > 0) {
        this.eml = 'glyphicon glyphicon-ok';
      } else {
        this.eml = 'glyphicon glyphicon-pencil';
      }
    }

    if (id === 'password') {
      if (this.password.length > 0) {
        this.pass = 'glyphicon glyphicon-ok';
      } else {
        this.pass = 'glyphicon glyphicon-pencil';
      }
    }
  }
  resetForm() {
    this.disabled = true;
    this.first_name = this.last_name = this.username = this.email = this.password = '' ;
    this.passtype = '';
  }

}
