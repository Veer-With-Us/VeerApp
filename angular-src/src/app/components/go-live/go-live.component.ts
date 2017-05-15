import { Component, OnInit } from '@angular/core';
import { OrdersModel } from '../../models/orders.model';

@Component({
  selector: 'veer-go-live',
  templateUrl: './go-live.component.html',
  styleUrls: ['./go-live.component.css']
})

export class GoLiveComponent implements OnInit {
  public headerMessagePartOne = "Welcome to ";
  public headerMessagePartTwo = "Chloe's Lemonade";
  public subHeaderMessage = "Make a selection below and register for future notifications and alerts";
  public lemonadePrice = 2;
  public strawberryLemonadePrice = 2.5;
  public homemadeCookiesPrice = 0.75;
  public addedToCart: Boolean;
  public ordersModel: OrdersModel = new OrdersModel();

  ngOnInit() {
    this.clearTotals();
    this.addedToCart = false;
  }

  lemonadeAddToCart() {
    this.addedToCart = true;
    this.ordersModel.lemonadeQuantity = (this.ordersModel.lemonadeQuantity + 1);
    this.ordersModel.lemonadeTotal = (this.ordersModel.lemonadeQuantity * this.lemonadePrice);
    this.ordersModel.subTotal = (this.ordersModel.lemonadeTotal + this.ordersModel.cookieTotal + this.ordersModel.strawberryTotal);
    this.ordersModel.itemsAdded = (this.ordersModel.lemonadeQuantity + this.ordersModel.cookieQuantity + this.ordersModel.strawberryQuantity);
    console.log('Lemonade Quantity and Total: ' + this.ordersModel.lemonadeQuantity + ' & ' + this.ordersModel.lemonadeTotal);
    console.log('Subtotal = ' + this.ordersModel.subTotal);
  }

  strawberryAddToCart() {
    this.addedToCart = true;
    this.ordersModel.strawberryQuantity = (this.ordersModel.strawberryQuantity + 1);
    this.ordersModel.strawberryTotal = (this.ordersModel.strawberryQuantity * this.strawberryLemonadePrice);
    this.ordersModel.subTotal = (this.ordersModel.lemonadeTotal + this.ordersModel.cookieTotal + this.ordersModel.strawberryTotal);
    this.ordersModel.itemsAdded = (this.ordersModel.lemonadeQuantity + this.ordersModel.cookieQuantity + this.ordersModel.strawberryQuantity);
    console.log('Strawberry Quantity and Total: ' + this.ordersModel.strawberryQuantity + ' & ' + this.ordersModel.strawberryTotal);
    console.log('Subtotal = ' + this.ordersModel.subTotal);
  }

  cookieAddToCart() {
    this.addedToCart = true;
    this.ordersModel.cookieQuantity = (this.ordersModel.cookieQuantity + 1);
    this.ordersModel.cookieTotal = (this.ordersModel.cookieQuantity * this.homemadeCookiesPrice);
    this.ordersModel.subTotal = (this.ordersModel.lemonadeTotal + this.ordersModel.cookieTotal + this.ordersModel.strawberryTotal);
    this.ordersModel.itemsAdded = (this.ordersModel.lemonadeQuantity + this.ordersModel.cookieQuantity + this.ordersModel.strawberryQuantity);
    console.log('Cookie Quantity and Total: ' + this.ordersModel.cookieQuantity + ' & ' + this.ordersModel.cookieTotal);
    console.log('Subtotal = ' + this.ordersModel.subTotal);
  }

  clearTotals() {
    this.ordersModel.lemonadeQuantity = 0;
    this.ordersModel.lemonadeTotal = 0;
    this.ordersModel.strawberryQuantity = 0;
    this.ordersModel.strawberryTotal = 0;
    this.ordersModel.cookieQuantity = 0;
    this.ordersModel.cookieTotal = 0;
    this.ordersModel.itemsAdded = 0;
    this.ordersModel.subTotal = 0;
  }
}