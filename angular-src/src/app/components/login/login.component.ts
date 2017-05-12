import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'veer-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public loginModel: LoginModel = new LoginModel();

  constructor(private authService: AuthService,
              private router: Router) {}

  onLoginSubmit() {
    const user = {
      username: this.loginModel.username,
      password: this.loginModel.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }
}