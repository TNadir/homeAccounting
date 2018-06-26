import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  allusers: User[];

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

    // this.userService.getAllUsers().subscribe(
    //   (data: User[]) => {
    //     this.allusers=data;
    //    console.log(this.allusers);
    //   }
    // );





    this.activRouter.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
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
    this.userService.getUserByEmailPassword(formData.email,formData.password)
      .subscribe((user: User) => {
        if (user) {

          user.password='';
          this.message.text = '';
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authService.login();
          this.router.navigate(['/system', 'bill']);

          // if (user.password == formData.password) {
          

          // } else {

          //   this.showMessage('danger', 'Username or password incorrect!!')
          // }

        } else {

          this.showMessage('danger', 'Username or password incorrect!!')
        }


      })




  }


}
