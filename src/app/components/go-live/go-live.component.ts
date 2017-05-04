import { Component } from '@angular/core';

@Component({
  selector: 'veer-go-live',
  templateUrl: './go-live.component.html',
  styleUrls: ['./go-live.component.css']
})

export class GoLiveComponent {
  public headerMessagePartOne = "Welcome to ";
  public headerMessagePartTwo = "Chloe's Lemonade";
  public subHeaderMessage = "Make a selection below and register for future notifications and alerts";
  public lemonadePrice = 2;
  public strawberryLemonadePrice = 2.5;
  public homemadeCookiesPrice = 0.75;
}