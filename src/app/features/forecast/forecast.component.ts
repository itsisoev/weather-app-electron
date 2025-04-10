import {ChangeDetectionStrategy, Component, DestroyRef, effect, inject, OnInit, output, signal} from '@angular/core';
import {UcSearchBarComponent} from "../../components/uc-search-bar/uc-search-bar.component";
import {UcWeatherCardComponent} from "../../components/uc-weather-card/uc-weather-card.component";
import {WeatherService} from "../../services/weather.service";
import {CurrentWeather, Weather7Days} from "../../models/weather";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {tap} from "rxjs";

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [
    UcSearchBarComponent,
    UcWeatherCardComponent
  ],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastComponent implements OnInit {
  weathers = output<Weather7Days>();

  searchPlace = signal<string>("Paris");
  weather = signal<CurrentWeather | null>(null);

  private destroyRef = inject(DestroyRef)
  private weatherService = inject(WeatherService);

  constructor() {
    effect(() => {
      const query = this.searchPlace().trim();

      if (query) {
        this.weatherService.getWeatherToday(query).pipe(
          tap((res) => {
            this.weather.set(res);
          }),
          takeUntilDestroyed(this.destroyRef)
        ).subscribe();
      }
    });
  }

  ngOnInit() {
  }

  onSearchChanged(value: string) {
    this.searchPlace.set(value)
  }
}
