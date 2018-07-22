import { Category } from './../../shared/models/category.model';
import { CategoryService } from './../../shared/services/categories.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'wfm-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

  @Output() onCategoryAdd = new EventEmitter<Category>();

  constructor(private categoryService: CategoryService
    ,private toastr:ToastrService) { }


  onSubmit(form: NgForm) {
    let { name, capacity } = form.value;
    if (capacity < 0) capacity *= -1;
    const category = new Category(name, capacity);

    this.categoryService.addCategory(category)
      .subscribe((cat: Category) => {
        form.reset();
        form.form.patchValue({ capacity: 1 });
        console.log(cat);
        this.onCategoryAdd.emit(cat);
        this.toastr.success('Category added successfuly','New category');

      })

  }

}
