import { Category } from './../../shared/models/category.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'wfm-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  @Input() categories: Category[] = [];
  @Output() onCategoryEdit = new EventEmitter<Category>();

  currentCategoryId = 1;
  selectedCategory: Category;

  constructor() { }


  onCategoryChange() {
    this.selectedCategory = this.categories
      .find(c => c.id === +this.currentCategoryId);
  }

  ngOnInit() {
    this.onCategoryChange();
  }

  onSubmit(form: NgForm) {

  }

}
