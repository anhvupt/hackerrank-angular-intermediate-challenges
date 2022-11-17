import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CityWeather {
  name: string;
  weather: string;
  status: string[];
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: CityWeather[];
}

@Component({
  selector: 'weather-finder',
  templateUrl: './weatherFinder.component.html',
  styleUrls: ['./weatherFinder.component.scss']
})
export class WeatherFinder implements OnInit {
  cityName="";
  cityResponse!: ApiResponse;

constructor(private http: HttpClient){

}

  ngOnInit(): void {
  }

  searched(): void {
    this.http.get<ApiResponse>(`https://jsonmock.hackerrank.com/api/weather?name=${this.cityName}`).subscribe(x => {
    console.log(x);  
    this.cityResponse = x;
    })
  }

  isCold(value: string) {
    return +(value.slice(2)) < 20;
  }
}
