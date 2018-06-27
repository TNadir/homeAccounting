import { Bill } from './../shared/models/bill.model';
import { Observable } from 'rxjs/Observable';
import { BillService } from './../shared/services/bill.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wfm-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {


  subscription1: Subscription;
  subscription2: Subscription;

  bill: Bill;
  currency: any;

  isLoaded = false;

  constructor(private billService: BillService) { }

  ngOnInit() {
    this.subscription1 = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data: [Bill, any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    });
  }


  onRefresh() {
    this.isLoaded = false;

    this.subscription1 = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).delay(2000).subscribe((data: [Bill, any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    });

  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    if (this.subscription2)
      this.subscription2.unsubscribe();
  }



}
