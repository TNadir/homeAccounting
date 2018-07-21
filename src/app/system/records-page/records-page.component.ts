import { Category } from './../shared/models/category.model';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/categories.service';

@Component({
  selector: 'wfm-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {


  categories: Category[] = [];
  isLoaded = false;
  constructor(private categoryService: CategoryService) {

  }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe((cats: Category[]) => {
        this.categories = cats;
        this.isLoaded = true;
      });
  }

  newCategoryAdded(category: Category) {
    this.categories.push(category);
  }

}
