import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Feedback, CustomerFeedbackService } from '../../services/customer-feedback.service';
import { InventoryModel } from '../../models/inventory.model';
import { InventoryService } from '../../services/inventory.service';

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
  opened: Boolean = false;
  inventorySuccessAlert: Boolean = false;
  inventoryFailureAlert: Boolean = false;

  public inventoryModel: InventoryModel = new InventoryModel();

  productInventoryForm = new FormGroup({
    productId: new FormControl('', Validators.required),
    productName: new FormControl('', Validators.required),
    unitPrice: new FormControl('', Validators.required),
    itemQuantity: new FormControl('', Validators.required)
  })

  constructor(public customerFeedbackService: CustomerFeedbackService,
              public inventoryService: InventoryService) {}

  ngOnInit() {
    this.loadCustomerFeedback();
  }

  loadCustomerFeedback() {
    this.feedback = this.customerFeedbackService.getFeedback();
  }

  openInventoryForm() {
    this.opened = true;
  }

  addInventoryToModel() {
    this.inventoryModel.productId = this.productInventoryForm.get('productId').value;
    this.inventoryModel.productName = this.productInventoryForm.get('productName').value;
    this.inventoryModel.unitPrice = this.productInventoryForm.get('unitPrice').value;
    this.inventoryModel.itemQuantity = this.productInventoryForm.get('itemQuantity').value;

    console.log('inventoryModel is: ' + JSON.stringify(this.inventoryModel));
  }

  addInventoryToDatabase() {
    this.inventoryService.postInventory(this.inventoryModel).subscribe(data => {
      if (data.success) {
        console.log('addInventoryToDatabase() success: Successfully added inventory to database');
        this.inventorySuccessAlert = true;
      } else {
        console.log('addInventoryToDatabase() failed: Failed to add inventory to database');
        this.inventoryFailureAlert = true;
      }
    });
  }

  onCloseInventory() {
    this.opened = false;
    this.productInventoryForm.reset();
  }

  onSubmit() {
    this.addInventoryToModel();
    console.log('inventoryModel inside onSubmit is: ' + JSON.stringify(this.inventoryModel));

    this.addInventoryToDatabase();
  }

}