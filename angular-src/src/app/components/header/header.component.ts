import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'veer-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  user: Object;
  userEmailAddress = 'ethan@veerwith.us';

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    
    err => {
      console.log(err);
      this.user = this.userEmailAddress;
      return false;
    })
  }
  
  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
    return false;
  }
}