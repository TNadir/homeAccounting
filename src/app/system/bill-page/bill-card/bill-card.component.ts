import { Bill } from './../../shared/models/bill.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wfm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  rub: number = 0;
  euro: number = 0;
  dollar: number = 0;

  constructor() { }

  ngOnInit() {
    this.rub = this.bill[0].value;
    const { rates } = this.currency;
    this.dollar = rates['USD'] * this.rub;
    this.euro = rates['AUD'] * this.rub;
  }

}
