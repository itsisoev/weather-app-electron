import {ChangeDetectionStrategy, Component, DestroyRef, effect, inject, OnInit, signal} from '@angular/core';
import {UcSearchBarComponent} from "../../components/uc-search-bar/uc-search-bar.component";
import {UcWeatherCardComponent} from "../../components/uc-weather-card/uc-weather-card.component";
import {WeatherService} from "../../services/weather.service";
import {CurrentWeather} from "../../models/weather";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {tap} from "rxjs";
import {Router} from "@angular/router";

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
  searchPlace = signal<string>("Paris");
  weather = signal<CurrentWeather | null>(null);

  private router = inject(Router);
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
    this.navigateToCity(this.searchPlace());
  }

  onSearchChanged(value: string) {
    this.searchPlace.set(value)
    this.navigateToCity(value)
  }

  private navigateToCity(city: string) {
    this.router.navigate(['/', city]);
  }
}
