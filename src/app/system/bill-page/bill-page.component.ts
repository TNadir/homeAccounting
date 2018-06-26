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


  subscription: Subscription;
  constructor(private billService: BillService) { }

  ngOnInit() {

    this.subscription = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data: [Bill, any]) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
