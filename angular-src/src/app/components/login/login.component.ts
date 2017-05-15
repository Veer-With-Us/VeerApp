import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'veer-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginModel: LoginModel = new LoginModel();
  public submitted: Boolean

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.submitted = false;
  }

  onLoginSubmit() {
    const user = {
      email: this.loginModel.email,
      password: this.loginModel.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.submitted = true;
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['home']);
      } else {
        this.submitted = false;
        this.router.navigate(['login']);
      }
    });
  }
}