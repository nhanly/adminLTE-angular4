import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class BaseService {
    constructor(private http: Http) { }
    getData(): Promise<any[]> {
        let dataUrl = '/assets/mock-json/sidebar-menu.json'
        return this.http.get(dataUrl)
                .toPromise()
                .then(
                    response =>
                    response.json() as any[]
                )
                .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }

}

