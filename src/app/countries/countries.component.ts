import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RegionComponent } from '../region/region.component';
import { ViewHttpService } from '../view-http.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;
  public allCountries = [];
  public countries = [];
  // tslint:disable-next-line:max-line-length
  constructor(private _route: ActivatedRoute, private router: Router, private viewHttpService: ViewHttpService) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let myRegionName = this._route.snapshot.paramMap.get('regions.region');
    this.viewHttpService.getCountries(myRegionName).subscribe(
      data => {
        for ( let i = 0; i <= data.length; i++) {
        // tslint:disable-next-line:prefer-const
        let unique = myRegionName.localeCompare(data[i].region);
        // tslint:disable-next-line:triple-equals
        if ( unique == 0 ) {
          this.allCountries = data[i];
          this.countries.push(this.allCountries);
         // console.log(this.allCountries);
        }
      }
      return this.countries;
    },
    error => {
      console.log(error.message);
    }
    );
    // console.log(myRegionName);
  }
  public filter(Currency): any {

  // tslint:disable-next-line:prefer-const
  let temp = this.countries;
  const cntry = [];
  // tslint:disable-next-line:prefer-const
  for ( let c of this.countries) {

  if (c.currencies[0].name === Currency) {
    cntry.push(c);
  }
}
this.countries = cntry;
}
public filterLang(Language): any {

  // tslint:disable-next-line:prefer-const
  let temp = this.countries;
  const cntry = [];
  // tslint:disable-next-line:prefer-const
  for ( let c of this.countries) {

  if (c.languages[0].name === Language) {
    cntry.push(c);
  }
}
this.countries = cntry;
}
}
