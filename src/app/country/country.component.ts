import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RegionComponent } from '../region/region.component';
import { ViewHttpService } from '../view-http.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  public allCountry = [];
  constructor(private _route: ActivatedRoute, private router: Router, private viewHttpService: ViewHttpService) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let myCountryName = this._route.snapshot.paramMap.get('country.name');
    this.viewHttpService.getRegions().subscribe(
      data => {
        for ( let i = 0; i <= data.length; i++) {
      // tslint:disable-next-line:prefer-const
          let unique = myCountryName.localeCompare(data[i].name);
      // tslint:disable-next-line:triple-equals
          if ( unique == 0) {
            this.allCountry.push(data[i]);
           // console.log(this.allCountry);
            return this.allCountry;
          //  console.log(this.allCountry);
          }
        }
      }
    );
  }
  public filter(Currency): any {

    // tslint:disable-next-line:prefer-const
    let temp = this.allCountry;
    const cntry = [];
    // tslint:disable-next-line:prefer-const
    for ( let c of this.allCountry) {
    if (c.currencies[0].name === Currency) {
      cntry.push(c);
    }
  }
  this.allCountry = cntry;
  }
}
