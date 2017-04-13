import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: `veer-welcome`,
  templateUrl: './welcome.component.html',
  styleUrls: [`./welcome.component.css`]
})

export class WelcomeComponent {
  userLoginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  submitted = false;
  onSubmit() {
    //
  }
}