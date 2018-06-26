import { AppSettings } from './../../../../AppSettings';
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Bill } from '../models/bill.model';

@Injectable()
export class BillService {

    rootUrl = AppSettings.API_URL;

    constructor(private http: Http) { }

    getBill(): Observable<Bill> {
        return this.http.get(this.rootUrl + `/api/bill/all`)
            .map((res: Response) => res.json())
            .map((bill: Bill) => bill ? bill : undefined);
    }

    getCurrency(base:string="RUB"): Observable<any> {

        return this.http.get(`http://data.fixer.io/api/latest?access_key=52ded31dc0f54f27351f4d9a80e1c761&symbols=USD,AUD,CAD&format=1`)
            .map((res: Response) => res.json());
    }

}