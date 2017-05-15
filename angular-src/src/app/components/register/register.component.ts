import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { RegisterModel } from '../../models/register.model';

@Component({
  selector: 'veer-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public registerModel: RegisterModel = new RegisterModel();

  constructor(private validateService: ValidateService,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    
  } 

  onRegisterSubmit() {
    const user = {
      firstName: this.registerModel.firstName,
      lastName: this.registerModel.lastName,
      email: this.registerModel.email,
      username: this.registerModel.username,
      password: this.registerModel.password
    }

    // Required fields
    if (!this.validateService.validateRegister(user)) {
      console.log('Registration not submitted. Please fill in all fields');
      return false;
    }

    // Validate email
    if (!this.validateService.validateEmail(user.email)){
      console.log('Registration not submitted. Please input a valid email address.');
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/register']);
      }
    });
  } 
}