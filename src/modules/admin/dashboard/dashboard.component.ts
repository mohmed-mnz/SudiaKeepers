import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import {
  faAdd,
  faUserCircle,
  faPersonArrowUpFromLine,
  faRoad
} from '@fortawesome/free-solid-svg-icons';
import { GServiceService } from 'src/app/services/GService.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  faUserCircle = faUserCircle;
  faAdd= faAdd;
  faRoad=faRoad;
  faPersonArrowUpFromLine=faPersonArrowUpFromLine;
  admins=0
  cacheirs=0
  subscripers = 0
  visitors=0
  data:any[]=[]
  chart: any;

  constructor(private gService: GServiceService) { }

  ngOnInit(): void {
    this.getUsersCount()
    this.getSubscripersCount()
    this.getvisitors()
    this.getData()
    this.gService.getAll('/transactions/').subscribe((res)=>{
      const weeklyEarnings = this.calculateWeeklyEarnings(res);
      this.renderChart(weeklyEarnings);
    })
    const weeklyEarnings = this.calculateWeeklyEarnings(this.data);
    this.renderChart(weeklyEarnings);
  }

    getUsersCount(){
    this.gService.get('/users/number/').subscribe((res)=>{
      console.log(res)
      this.admins =res.user_counts.admin 
      this.cacheirs = res.user_counts.cashier
    })
  }
getData(){
  this.gService.getAll('/transactions/').subscribe((res)=>{
    console.log(res)
    this.data=res
  })
}


  getSubscripersCount(){
    this.gService.get('/Subscriptions/subscribers/number/').subscribe((res)=>{
      this.subscripers =res.subscriber_count
      console.log('subscripers',res)
    })
  }

  getvisitors(){
    const currentDate = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(currentDate.getDate() - 7);
    this.gService.get('/transactions/').subscribe((res)=>{
  
      res = res.filter((item: { from_time: string | number | Date; }) => new Date(item. from_time) >= sevenDaysAgo);
      this.visitors=res.length
      
    })
  }

  calculateWeeklyEarnings(data: any[]): { week: number, earnings: number }[] {
    const weeklyEarnings: { [key: number]: number } = {};
  
    // Group transactions by week
    data.forEach(transaction => {
      const weekNumber = this.getWeekNumber(new Date(transaction.from_time));
      if (!weeklyEarnings[weekNumber]) {
        weeklyEarnings[weekNumber] = 0;
      }
      weeklyEarnings[weekNumber] += parseFloat(transaction.price);
    });
  
    // Convert object to array
    return Object.keys(weeklyEarnings).map(weekNumber => ({
      week: parseInt(weekNumber, 10), // Provide the radix as the second argument
      earnings: weeklyEarnings[parseInt(weekNumber, 10)]
    }));
  }

  getWeekNumber(date: Date): number {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const millisecsInDay = 86400000;
    return Math.ceil((((date.getTime() - oneJan.getTime()) / millisecsInDay) + oneJan.getDay() + 1) / 7);
  }

  renderChart(weeklyEarnings: any[]): void {
    const weeks = weeklyEarnings.map(week => week.week);
    const earnings = weeklyEarnings.map(week => week.earnings);
console.log('earnings',earnings)
    this.chart = new Chart({
          chart: {
            type: 'line',
            height: 325
          },
          title: {
            text: 'weekely Earnings'
          },
          xAxis: {
            categories: weeks
           
          },
          yAxis: {
            title: {
              text: 'weekely Earnings'
            }
          },
          series: [
            
            {
              name: '',
              type: 'line',
              color: '#7e0505',
              data: earnings
            },
           
          ],
          credits: {
            enabled: false
          }
        })
      }
}