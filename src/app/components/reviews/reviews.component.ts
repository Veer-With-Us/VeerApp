import { Component } from '@angular/core';
import { Feedback } from '../../services/customer-feedback.service';

@Component({
  selector: 'veer-review-cards',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})

export class ReviewsComponent {
  feedback: Feedback[];

  average = ((5 + 4.5 + 4.75 + 5 + 5 + 4.5)/6);

  averageRating(feedback: Feedback[]) {
    let sum = feedback.reduce((average, feedback) => average + feedback.rating, 0);
    return sum / feedback.length;
  }
}