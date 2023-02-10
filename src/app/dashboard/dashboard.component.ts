import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentValue=0
  gaugeType:any = "arch";
  gaugeValue = 0;
  gaugeValue2 = 0;
  gaugeValue3 = 0;
  gaugeValue4 = 0;
  gaugeValue5 = 0;
  gaugeLabel = "Speed";
  gaugeAppendText = "r/s";
  
  ngOnInit(){
    //this.gaugeFunction();
    //setInterval(this.fu,3000)
    //setInterval(this.getRandomNumber,3000)

  }
  ngAfterViewInit(){
    this.gaugeFunction();
    this.createChartLine()
  }

  public getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  private createChartLine(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push([`${date.getDate()}/${date.getMonth() + 1}`, this.getRandomNumber(0, 1000)]);
    }

    const chart = Highcharts.chart('chart-line', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Line Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        title: {
          text: null,
        }
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      series: [{
        name: 'Amount',
        data,
      }],
    } as any);
    const charts = Highcharts.chart('chart-lines', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Line Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        title: {
          text: null,
        }
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      series: [{
        name: 'Amount',
        data,
      }],
    } as any);

    setInterval(() => {
      date.setDate(date.getDate() + 1);
      chart.series[0].addPoint([`${date.getDate()}/${date.getMonth() + 1}`, this.getRandomNumber(0, 1000)], true, true);
    }, 1500);

    setInterval(() => {
      date.setDate(date.getDate() + 1);
      charts.series[0].addPoint([`${date.getDate()}/${date.getMonth() + 1}`, this.getRandomNumber(0, 1000)], true, true);
    }, 2000);
  }

  gaugeFunction(){
    setInterval(() => {
      this.gaugeValue = this.getRandomNumber(0,100);
      this.gaugeValue2 = this.getRandomNumber(0,100)
      this.gaugeValue3 = this.getRandomNumber(0,100)
      this.gaugeValue4 = this.getRandomNumber(0,100)
      this.gaugeValue5 = this.getRandomNumber(0,100)
    }, 2000);
  }
  
  
}

