import { AppSettings } from './../../../AppSettings';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { User } from "../models/user.model";
import { jsonpFactory } from "@angular/http/src/http_module";
import { BaseApi } from '../core/base-api';

@Injectable()
export class UsersService extends BaseApi {
    rootUrl = AppSettings.API_URL;
    constructor(public http: Http) {
     super(http);

     }

    getUserByEmail(email: string): Observable<User> {
      return this.get(`/api/user/validateuser?email=${email}`)
             .map((user: User[]) => user[0] ? user[0] : undefined);
    }


    getUserByEmailPassword(email: string, pass: string): Observable<User> {
        return this.get(`/api/user/finduser?email=${email}&password=${pass}`)
        .map((user: User[]) => user[0] ? user[0] : undefined);
    }

    getAllUsers(): Observable<User[]> {
        return this.get(this.rootUrl+`/api/user/all`);
    }

    createNewUser(user: User): Observable<User> {
        return this.post(`/api/user/adduser`, user);
    }

}