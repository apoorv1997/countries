import { Component, OnInit } from '@angular/core';
import { ViewHttpService } from '../view-http.service';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;
  public allRegions = [];
  public eachRegions = [];
  constructor(public viewService: ViewHttpService) {
  }

  ngOnInit() {
    this.viewService.getRegions().subscribe(
      // tslint:disable-next-line:no-unused-expression
      data => {
        for ( let i = 0 ; i <= data.length; i++) {
        this.allRegions = data[i];
       // console.log(this.allRegions);
        // if ( this.allRegions.region != data[i + 1].region) {
        this.eachRegions.push(this.allRegions);
        // }
        }
        return this.eachRegions;
      },
      error => {
        console.log(error.message);
      }
    );
  }

}
