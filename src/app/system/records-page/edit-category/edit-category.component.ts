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
  name: string;
  capacity: number;

  constructor(private categoryService: CategoryService
    , private toastr: ToastrService) { }


  // onCategoryChange() {
  //   this.selectedCategory = this.categories
  //     .find(c => c.id === +this.currentCategoryId);
  // }

  showEditTodo(ecategory: Category) {
    this.name = ecategory.name;
    this.capacity = ecategory.capacity;
    this.currentCategoryId = ecategory.id;
  }

  ngOnInit() {
    //this.onCategoryChange();
    // this.selectedCategory = this.categories;
    // this.name = "";
    // this.capacity = 0;

    // this.categoryService.getCategories()
    //   .subscribe((cats: Category[]) => {
    //     //console.log(cats);
    //     this.categories = cats;
    //   })
  }


  onEdit() {
    if (this.capacity < 0) this.capacity *= -1;
    const category = new Category(this.name, this.capacity, +this.currentCategoryId);
    this.categoryService.updateCategories(category)
      .subscribe((cat: Category) => {
        this.toastr.success('Category updated successfuly', 'Update category');
        const afterEdit = this.categories.find(x => x.id == this.currentCategoryId);
        afterEdit.capacity = this.capacity;
        afterEdit.name = this.name;
      });
  }

  // getAll() {
  //   this.categoryService.getCategories()
  //     .subscribe((cats: Category[]) => {
  //       this.categories = cats;
  //     });
  // }

  onDelete(delcat: Category) {
    this.categoryService.deleteCategories(delcat)
      .subscribe((cat: Category) => {
        this.toastr.success('Category deleted successfuly', 'Delete category');
        this.categories.splice(this.categories.indexOf(delcat), 1);
        //this.getAll();
      });
  }

  // onSubmit(form: NgForm) {
  //   let { ename, ecapacity } = form.value;
  //   if (ecapacity < 0) ecapacity *= -1;
  //   const category = new Category(ename, ecapacity, +this.currentCategoryId);
  //   this.categoryService.updateCategories(category)
  //     .subscribe((cat: Category) => {
  //       this.toastr.warning('Category updated successfuly', 'Update category');
  //     });
  // }


}
