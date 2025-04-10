import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CurrentWeather} from "../../interfaces/weather";
import {WeatherService} from "../../services/weather.service";
import {LoaderComponent} from "../loader/loader.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'uc-card-weather',
  standalone: true,
  imports: [
    LoaderComponent,
    CommonModule,
  ],
  templateUrl: './card-weather.component.html',
  styleUrl: './card-weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardWeatherComponent implements OnInit {
  weather = signal<CurrentWeather | undefined>(undefined);
  isLoading = signal<boolean>(true);

  weatherService = inject(WeatherService);
  destroyRef = inject(DestroyRef)

  constructor() {
    this.getWeatherToday();
  }

  ngOnInit() {
    this.weatherService.city$
      .pipe(

        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(city => {
        this.weatherService.getWeatherToday(city).subscribe(data => {
          this.weather.set(data);
        });
      });
  }

  getWeatherToday() {
    this.weatherService.getWeatherToday('Moscow').subscribe(weather => {
      this.weather.set(weather);
      this.isLoading.set(false);
      console.log(this.weather());
    })
  }
}
