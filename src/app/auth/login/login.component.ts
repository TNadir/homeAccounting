import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;


  constructor(
    private userService: UsersService
    , private authService: AuthService
    , private router: Router
    , private activRouter: ActivatedRoute

  ) {
    this.message = new Message('danger', '');
  }

  ngOnInit() {
    this.message = new Message('danger', '');


    this.activRouter.queryParams
      .subscribe((params: Params) => {
        if(params['nowCanLogin'])
        {
          this.showMessage('success', 'You can login now')
        }
      });

    this.form = new FormGroup({

      'email': new FormControl(null, [Validators.required, Validators.email]),

      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])

    })

  }


  showMessage(type: string, text: string) {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000)
  }


  onSubmit() {


    const formData = this.form.value;

    this.userService.getUserByEmail(formData.email)
      .subscribe((user: User) => {

        if (user) {

          if (user.password == formData.password) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();


          } else {

            this.showMessage('danger', 'Username or password incorrect!!')
          }

        } else {

          this.showMessage('danger', 'User not found!!')
        }


      })




  }


}
