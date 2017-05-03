import { Component, OnInit } from '@angular/core';
import { Feedback, CustomerFeedbackService } from '../../services/customer-feedback.service';

@Component({
  selector: 'veer-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})

export class SellComponent implements OnInit {
  regularLemonade = 2;
  strawberryLemonade = 2.50;
  homemadeCookies = 0.75;
  feedback: Feedback[];

  constructor(public customerFeedbackService: CustomerFeedbackService) {}

  ngOnInit() {
    this.loadCustomerFeedback();
  }

  loadCustomerFeedback() {
    this.feedback = this.customerFeedbackService.getFeedback();
  }

}