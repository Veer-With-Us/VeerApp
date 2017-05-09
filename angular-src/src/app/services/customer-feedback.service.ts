import { Injectable } from '@angular/core';

// declare var moment: any;

export class Feedback {
  constructor(
    public id: number,
    public rating: number,
    public user: string,
    public timestamp: string
  ) {}
}

@Injectable()
export class CustomerFeedbackService {
  getFeedback(): Array<Feedback> {
    return feedback
      .map(f => new Feedback(f.id, f.rating, f.user, f.timestamp));
  }
}

var feedback = [
  {
    id: 1,
    rating: 5,
    user: 'Gregory Bordelon',
    timestamp: '04/30/2017'
  },
  {
    id: 2,
    rating: 4.5,
    user: 'Russell Alvarado',
    timestamp: '04/30/2017'
  },
  {
    id: 3,
    rating: 4.75,
    user: 'Alex Jekowsky',
    timestamp: '04/29/2017'
  },
  {
    id: 4,
    rating: 5,
    user: 'Howard Block',
    timestamp: '04/29/2017'
  },
  {
    id: 5,
    rating: 5,
    user: 'Eric Ward',
    timestamp: '04/29/2017'
  },
  {
    id: 6,
    rating: 4.5,
    user: 'Trevor Gamble',
    timestamp: '04/28/2017'
  }
]