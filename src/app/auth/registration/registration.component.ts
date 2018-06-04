import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private userService: UsersService,
    private route: Router

  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
  }



  onRegister() {

    const registerData = this.form.value;
    const usr = new User(registerData.email, registerData.password, registerData.name);
    this.userService.createNewUser(usr).subscribe(() => {

      this.route.navigate(['/login'], {
        queryParams: {
          nowCanLogin: true
        }
      });

    });
  }



  forbiddenEmails(control: FormControl) {
    return new Promise((resolve, reject) => {
      this.userService.getUserByEmail(control.value)
        .subscribe((user: User) => {
          if (user) {
            resolve({ forbiddenEmails: true });
          } else {
            resolve(null)
          }
        });
    });
  }



}
