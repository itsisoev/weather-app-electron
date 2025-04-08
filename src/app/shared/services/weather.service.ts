import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {CurrentWeather, Weather14Days, Weather7Days} from "../interfaces/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY: string = environment.KEY_WEATHER;
  private BASE_URL: string = 'http://api.weatherapi.com/v1/';
  private citySubject = new BehaviorSubject<string>('Moscow')

  city$ = this.citySubject.asObservable();

  constructor(private http: HttpClient) { }

  setCity(city: string) {
    this.citySubject.next(city);
  }

  getWeatherToday(city: string): Observable<CurrentWeather> {
    const url = `${this.BASE_URL}current.json?key=${this.API_KEY}&q=${city}`;
    return this.http.get<CurrentWeather>(url);
  }

  getWeather7Days(city: string): Observable<Weather7Days> {
    const url = `${this.BASE_URL}forecast.json?key=${this.API_KEY}&q=${city}&days=7`;
    return this.http.get<Weather7Days>(url);
  }

  getWeather14Days(city: string): Observable<Weather14Days> {
    const url = `${this.BASE_URL}forecast.json?key=${this.API_KEY}&q=${city}&days=14`;
    return this.http.get<Weather14Days>(url);
  }

}
