import { CategoryService } from './../../shared/services/categories.service';
import { Category } from './../../shared/models/category.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private categoryService: CategoryService
  ,private toastr:ToastrService) { }


  onCategoryChange() {
    this.selectedCategory = this.categories
      .find(c => c.id === +this.currentCategoryId);
  }

  ngOnInit() {
    this.onCategoryChange();
  }

  onSubmit(form: NgForm) {
    let { ename, ecapacity } = form.value;
    if (ecapacity < 0) ecapacity *= -1;
    const category = new Category(ename, ecapacity, +this.currentCategoryId);
    this.categoryService.updateCategories(category)
      .subscribe((cat: Category) => {
        this.toastr.warning('Category updated successfuly','Update category');
      });
  }


}
