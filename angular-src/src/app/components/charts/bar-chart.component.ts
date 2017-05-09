import { Component } from '@angular/core';

@Component({
  selector: 'veer-bar-chart',
  templateUrl: './bar-chart.component.html'
})

export class BarChartComponent {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['10/2016', '11/2016', '12/2016', '01/2017', '02/2017', '03/2017', '04/2017'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Regular Lemonade'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Strawberry Lemonade'},
    {data: [42, 60, 50, 67, 92, 36, 70], label: 'Homemade Cookies'}
  ];

  public barChartColors: Array<any> = [
    {
      backgroundColor: '#2C85A2',
      borderColor: '#2C85A2',
      pointBackgroundColor: '#2C85A2',
      pointBorderColor: '#2C85A2',
      pointHoverBackgroundColor: '#2C85A2',
      pointHoverBorderColor: '#2C85A2',
    },
    {
      backgroundColor: '#A6E0E7',
      borderColor: '#A6E0E7',
      pointBackgroundColor: '#A6E0E7',
      pointBorderColor: '#A6E0E7',
      pointHoverBackgroundColor: '#A6E0E7',
      pointHoverBorderColor: '#A6E0E7'
    },
    {
      backgroundColor: '#F5D43F',
      borderColor: '#F5D43F',
      pointBackgroundColor: '#F5D43F',
      pointBorderColor: '#F5D43F',
      pointHoverBackgroundColor: '#F5D43F',
      pointHoverBorderColor: '#F5D43F' 
    }
  ]
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}