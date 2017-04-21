import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: `veer-compose-message`,
  templateUrl: `./compose.component.html`,
  styleUrls: ['./compose.component.css']
})

export class ComposeComponent {
  composeMessageForm = new FormGroup({
    to: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  submitted = false;

  onSubmit() {
    //
  }
}