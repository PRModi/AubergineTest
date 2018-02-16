import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";


@Injectable()
export class DataService implements OnInit {
    public actionUrl: string = "https://api.iextrading.com/1.0/";

    constructor(private http: Http) { }

    ngOnInit() { }

    getCompanyDetails(symbol: string): Observable<any> {
        return this.http.get(`${this.actionUrl}stock/${symbol}/company`)
            .map((res: Response) => {
                return res.json();
            });
    }

    getLogo(symbol: string): Observable<any> {
        return this.http.get(`${this.actionUrl}stock/${symbol}/logo`)
            .map((res: Response) => {
                return res.json();
            });
    }

    getMarketData(symbol: string): Observable<any> {
        return this.http.get(`${this.actionUrl}tops?symbols=${symbol}`)
            .map((res: Response) => {
                return res.json();
            });
    }
}

export const SYMBOLS = ['AAPL', 'MSFT', 'IBN', 'V', 'HDB', 'PYPL', 'TSLA', 'FB', 'AXP', 'KO', 'BABA', 'VOD'];
