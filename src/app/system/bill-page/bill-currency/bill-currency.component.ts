import { Component, Input } from '@angular/core';

@Component({
  selector: 'wfm-bill-currency',
  templateUrl: './bill-currency.component.html',
  styleUrls: ['./bill-currency.component.scss']
})
export class BillCurrencyComponent  {

  @Input() currency:any;
  currencies:string[]=['USD','AUD'];
  

}
