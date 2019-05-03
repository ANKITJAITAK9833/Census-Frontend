import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HouseListingService } from '../services/house-listing.service';


@Component({
  selector: 'app-statereport',
  templateUrl: './statereport.component.html',
  styleUrls: ['./statereport.component.css']
})
export class StatereportComponent implements OnInit {

  public isReportFetched: boolean = false;
  constructor(private houseListingService: HouseListingService) { }
  public StateArray: Label[] = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal");
  public barChartLabels: Label[];
  public barChartType: ChartType;
  public barChartLegend;
  public barChartPlugins;
  public barChartData: ChartDataSets[];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  ngOnInit() {
    this.GetStatesPopulation().then((dataArray: number[]) => {
      console.log(dataArray);
      this.barChartLabels = this.StateArray;
      this.barChartType = 'bar';
      this.barChartLegend = true;

      this.barChartData = [
        { data: dataArray, label: 'Series A' },
      ];
      this.isReportFetched = true;
    })

  }

  GetStatesPopulation() {
    return new Promise(
      (resolve, reject) => {
        this.houseListingService.GetStateReport().subscribe((data: any) => {
          let stateReport: number[] = data.data;
          resolve(stateReport)
        })
      })



  }
}
