import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';
import {Weather14Days, WeatherForecastDay} from "../../models/weather";
import {DatePipe, JsonPipe} from "@angular/common";
import {UcLoaderComponent} from "../uc-loader/uc-loader.component";

@Component({
  selector: 'uc-forecast-list',
  standalone: true,
  imports: [
    JsonPipe,
    DatePipe,
    UcLoaderComponent
  ],
  templateUrl: './uc-forecast-list.component.html',
  styleUrl: './uc-forecast-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UcForecastListComponent {
  weathers = input<Weather14Days | null>(null);
  showAll = signal<boolean>(false);

  get forecastArray(): WeatherForecastDay[] {
    const forecast = this.weathers()?.forecast?.forecastday ?? [];
    const today = new Date().toISOString().split('T')[0];

    return forecast.filter(day => day.date !== today);
  }

  get visibleForecast(): WeatherForecastDay[] {
    return this.showAll() ? this.forecastArray : this.forecastArray.slice(0, 6);
  }

  toggleShowAll(): void {
    this.showAll.update(value => !value);
  }
}
