import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
@Injectable()
export class ViewHttpService {
  private baseUrl = 'https://restcountries.eu/rest/v2';
  constructor(public _http: HttpClient) { }

  public getRegions(): any {
    // tslint:disable-next-line:prefer-const
    let myRegions = this._http.get(this.baseUrl + '/all?fields=name;currencies;flag;region;subregion;capital;language;timezones');
    return myRegions;
  }

  public getCountries(myRegionName): any {
    // tslint:disable-next-line:prefer-const
    let myCountries = this._http.get(this.baseUrl + '/region/' + myRegionName);
    return myCountries;
  }
}
