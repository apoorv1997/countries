import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { ViewHttpService } from './view-http.service';
import { HttpClientModule } from '@angular/common/http';
import { UniquePipe } from './unique.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    CountriesComponent,
    CountryComponent,
    UniquePipe
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', component: RegionComponent, pathMatch: 'full' },
      { path: 'countries/:regions.region', component: CountriesComponent },
      { path: 'country/:country.name', component: CountryComponent },
      { path: 'country/:country.currencies[0].name', component: CountriesComponent }
    ]),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ViewHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
