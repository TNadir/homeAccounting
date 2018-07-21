import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BaseApi } from "../../../shared/core/base-api";
import { Category } from '../models/category.model';


@Injectable()
export class CategoryService extends BaseApi{

    constructor(public http: Http) { 
        super(http);
    }

    addCategory(category:Category):Observable<Category>
    {
      return this.post("/api/category/addcategories",category);
    }

}