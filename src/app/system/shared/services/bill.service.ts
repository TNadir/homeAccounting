import { AppSettings } from './../../../../AppSettings';
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Bill } from '../models/bill.model';
import { BaseApi } from '../../../shared/core/base-api';

@Injectable()
export class BillService extends BaseApi {
    constructor(public http: Http) { 
        super(http);
    }

    getBill(): Observable<Bill> {
        return this.get(`/api/bill/all`);
    }

    getCurrency(base:string="RUB"): Observable<any> {

        return this.http.get(`http://data.fixer.io/api/latest?access_key=52ded31dc0f54f27351f4d9a80e1c761&symbols=USD,AUD,CAD&format=1`)
            .map((res: Response) => res.json());
    }
    

    

}