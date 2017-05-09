import { Component } from '@angular/core';

@Component({
  selector: 'veer-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  userEmailAddress: string = "ethan@veerwith.us";
}