import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries(){
    let url = "https://countriesnow.space/api/v0.1/countries";

    return this.http.get(url);
  }

  getWeather(con : string){
    let wurl = `https://api.openweathermap.org/data/2.5/weather?q=${con}&APPID=794ee95e63c5a32aaf88cd813fa2e425`;

    return this.http.get(wurl);
  }
}
