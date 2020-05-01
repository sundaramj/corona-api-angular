import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  coronadata: any;
  showLoader: boolean = true;
  casedata: any;

  constructor(private CoronaApi : CoronaService) { }

  ngOnInit(): void {
    this.showData();
  }
  // Get data from api
  showData(){
    this.CoronaApi.getData().subscribe(
      data => {        
        this.showLoader = false;  
        this.coronadata = data['statewise'],
        this.casedata = data['cases_time_series']
      }
    )
  }
}
