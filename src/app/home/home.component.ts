import { SYMBOLS } from './../../service/data.service';
import { CompanyDetail } from './../../models/companyDetails.model';
import { MarketData } from "./../../models/marketData.model";
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public symbols: string[] = SYMBOLS;
  public companies: object[] = [];

  constructor(
    private dataService: DataService
  ) { }


  ngOnInit() {
    this.symbols.forEach(symbol => {
      let object = {
        'companyDetail': {},
        'logoUrl': {},
        'marketData': {}
      };

      this.dataService.getCompanyDetails(symbol).subscribe((companyData: CompanyDetail) => {
        object.companyDetail = companyData;
      });

      this.dataService.getLogo(symbol).subscribe(logoUrl => {
        object.logoUrl = logoUrl.url;
      });

      this.dataService.getMarketData(symbol).subscribe((marketData: MarketData) => {
        object.marketData = marketData[0];
      });

      this.companies.push(object);
    });
  }

}