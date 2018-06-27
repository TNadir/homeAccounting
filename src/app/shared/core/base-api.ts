import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class BaseApi {

    private baseUrl = "http://localhost:53059";

    constructor(public http: Http) { }


    getUrl(url: string = ''): string {
        return this.baseUrl + url;
    }

    get(url: string = ''): Observable<any> {
        return this.http.get(this.getUrl(url))
            .map((response: Response) => response.json());
    }

    post(url: string = '',data:any={}): Observable<any> {
        return this.http.post(this.getUrl(url),data)
            .map((response: Response) => response.json());
    }

    put(url: string = '',data:any={}): Observable<any> {
        return this.http.put(this.getUrl(url),data)
            .map((response: Response) => response.json());
    }


}