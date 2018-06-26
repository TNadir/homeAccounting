import { AppSettings } from './../../../AppSettings';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { User } from "../models/user.model";
import { jsonpFactory } from "@angular/http/src/http_module";

@Injectable()
export class UsersService {
    rootUrl = AppSettings.API_URL;
    constructor(private http: Http) { }

    getUserByEmail(email: string): Observable<User> {
        return this.http.get(this.rootUrl+`/api/user/validateuser?email=${email}`)
            .map((response: Response) => response.json())
            .map((user: User[]) => user[0] ? user[0] : undefined);
    }


    getUserByEmailPassword(email: string, pass: string): Observable<User> {
        return this.http.get(this.rootUrl+`/api/user/finduser?email=${email}&password=${pass}`)
        .map((response: Response) => response.json())
        .map((user: User[]) => user[0] ? user[0] : undefined);
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get(this.rootUrl+`/api/user/all`)
            .map((response: Response) => response.json());
    }

    createNewUser(user: User): Observable<User> {
        return this.http.post(this.rootUrl+`/api/user/adduser`, user)
            .map((response: Response) => response.json());
    }

}