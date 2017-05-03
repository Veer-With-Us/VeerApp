import { Component, OnInit } from '@angular/core';
import { SalesActivityService, SalesActivity } from '../../services/sales-activity.service';

@Component({
  selector: 'veer-sales-activity',
  templateUrl: './sales-activity.component.html',
  styleUrls: ['./sales-activity.component.css']
})

export class SalesActivityComponent implements OnInit {
  constructor(private salesActivityService: SalesActivityService) {}

  sales: SalesActivity[];

  ngOnInit() {
    this.loadRecentSalesActivity();
  }

  loadRecentSalesActivity() {
    this.sales = this.salesActivityService.getSalesActivity();
  }


}