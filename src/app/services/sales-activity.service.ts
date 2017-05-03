import { Injectable } from '@angular/core';

export class SalesActivity {
  constructor(
    public transactionId: number,
    public name: string,
    public item: any,
    public quantitySold: number,
    public revenue: number,
    public date: string,
    public transactionType: string
  ) {}
}

@Injectable()

export class SalesActivityService {
  getSalesActivity(): Array<SalesActivity> {
    return transactions
      .map(t => new SalesActivity(t.transactionId, t.name, t.item, t.quantitySold, t.revenue, t.date, t.transactionType))
  }
}

var transactions =[
  {
    transactionId: 1,
    name: 'Eric Ward',
    item: 'Strawberry Lemonade',
    quantitySold: 1,
    revenue: 2.50,
    date: '04/30/2017',
    transactionType: 'credit'
  },
  {
    transactionId: 2,
    name: 'Alex Jekowsky',
    item: 'Regular Lemonade',
    quantitySold: 2,
    revenue: 4.00,
    date: '04/30/2017',
    transactionType: 'debit'
  },
  {
    transactionId: 3,
    name: 'Howard Block',
    item: 'Homemade Cookies',
    quantitySold: 3,
    revenue: 2.25,
    date: '04/30/2017',
    transactionType: 'cash'
  },
  {
    transactionId: 4,
    name: 'Trevor Gamble',
    item: ['Strawberry Lemonade', 'Homemade Cookies'],
    quantitySold: 2,
    revenue: 3.25,
    date: '04/30/2017',
    transactionType: 'credit'
  },
  {
    transactionId: 5,
    name: 'Alfy Jekowsky',
    item: 'Homemade Cookies',
    quantitySold: 10,
    revenue: 7.50,
    date: '04/30/2017',
    transactionType: 'credit'
  },
  {
    transactionId: 6,
    name: 'Gregory Bordelon',
    item: 'Strawberry Lemonade',
    quantitySold: 2,
    revenue: 5.00,
    date: '04/31/2017',
    transactionType: 'cash'
  }
  /*{
    transactionId: 7,
    name: 'Russell Alvarado',
    item: 'Regular Lemonade',
    quantitySold: 1,
    revenue: 2.00,
    date: '04/30/2017',
    transactionType: 'cash'
  },
  {
    transactionId: 8,
    name: 'Alan Fleming',
    item: ['Regular Lemonade', 'Homemade Cookies'],
    quantitySold: 3,
    revenue: 3.50,
    date: '04/30/2017',
    transactionType: 'debit'
  }*/
]