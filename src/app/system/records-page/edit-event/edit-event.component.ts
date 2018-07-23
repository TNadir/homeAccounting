import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'wfm-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  msg = "";
  constructor() { }

  ngOnInit() {
  }


  showEditTodo() {
    this.msg = "1111 sfsdfds";
  }



}
