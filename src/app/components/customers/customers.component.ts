import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../../services/customer-data.service';

@Component({
  selector: 'veer-customer-table',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomerTableComponent implements OnInit {
  private subCustomers: any;
  protected customers: any = [];

  constructor(private customerDataService: CustomerDataService) {}

  ngOnInit() {
    this.getCustomerData();
  }

  getCustomerData() {
    this.subCustomers = this.customerDataService.generateRandomCustomer().subscribe(res => {
      this.customers = res;
      console.log(this.customers);
    })
  }
}