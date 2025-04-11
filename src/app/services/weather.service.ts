import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {CurrentWeather, Weather7Days} from "../models/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY = environment.KEY_WEATHER;
  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getWeatherToday(city: string): Observable<CurrentWeather> {
    const url = `${this.BASE_URL}current.json?key=${this.API_KEY}&q=${city}`;
    return this.http.get<CurrentWeather>(url);
  }

  getWeather14Days(city: string): Observable<Weather7Days> {
    const url = `${this.BASE_URL}forecast.json?key=${this.API_KEY}&q=${city}&days=14`;
    return this.http.get<Weather7Days>(url);
  }
}
