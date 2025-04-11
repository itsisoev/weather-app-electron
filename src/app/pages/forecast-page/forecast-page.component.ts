import {ChangeDetectionStrategy, Component, DestroyRef, inject, signal} from '@angular/core';
import {UcForecastListComponent} from "../../components/uc-forecast-list/uc-forecast-list.component";
import {takeUntilDestroyed, toObservable} from "@angular/core/rxjs-interop";
import {WeatherService} from "../../services/weather.service";
import {ActivatedRoute} from "@angular/router";
import {Weather14Days} from "../../models/weather";
import {tap} from "rxjs";

@Component({
  selector: 'app-forecast-page',
  standalone: true,
  imports: [
    UcForecastListComponent
  ],
  templateUrl: './forecast-page.component.html',
  styleUrl: './forecast-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastPageComponent {
  city = signal<string>('');
  forecast = signal<Weather14Days | null>(null);

  private destroyRef = inject(DestroyRef);
  private route = inject(ActivatedRoute);
  private weatherService = inject(WeatherService);

  constructor() {
    this.route.paramMap.subscribe(params => {
      const cityFromRoute = params.get('city');
      if (cityFromRoute) {
        this.city.set(cityFromRoute);
        this.getWeather14Days();
      }
    });
  }

  getWeather14Days() {
    this.weatherService.getWeather14Days(this.city()).pipe(
      tap((res) => this.forecast.set(res)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }
}
