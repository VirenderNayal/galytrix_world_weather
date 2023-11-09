import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CountriesService } from "./countries.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'world_weather';

  data = []
  wdata = {}
  constructor(private countries : CountriesService) {
    this.countries.getCountries().subscribe(data => {
      this.data = Object.values(data)[2];
      console.log(this.data)
    })
  }

  async getWeather(con : string){
    this.countries.getWeather(con).subscribe(data => {
      console.log(data);
      this.wdata = data;
    });
  }
  
}
