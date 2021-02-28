import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITesting } from '../interfaces/testing';
import { ITestingdata } from '../interfaces/testingdata';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {

  constructor(private _http: HttpClient) { }

  getHeader(){
    return this._http.get<ITesting>('http://localhost:1337/testing');
  }

  getTestimonials(){
    return this._http.get<ITestingdata[]>('http://localhost:1337/testing-data');
  }

}
