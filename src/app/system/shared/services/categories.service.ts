import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BaseApi } from "../../../shared/core/base-api";
import { Category } from '../models/category.model';


@Injectable()
export class CategoryService extends BaseApi {

    constructor(public http: Http) {
        super(http);
    }

    addCategory(category: Category): Observable<Category> {
        return this.post("/api/category/insert", category);
    }

    getCategories(): Observable<Category[]> {
        return this.get("/api/category/all");
    }

    updateCategories(category: Category): Observable<Category> {
        return this.put("/api/category/update", category);
    }

    deleteCategories(category: Category): Observable<Category> {
        return this.post("/api/category/delete", category);
    }

}