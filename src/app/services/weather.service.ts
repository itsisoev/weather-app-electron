import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {CurrentWeather} from "../models/weather";

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
}
