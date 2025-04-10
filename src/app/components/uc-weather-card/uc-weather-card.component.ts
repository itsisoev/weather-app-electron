import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {CurrentWeather} from "../../models/weather";
import {DatePipe} from "@angular/common";
import {UcSunComponent} from "../uc-sun/uc-sun.component";

@Component({
  selector: 'uc-weather-card',
  standalone: true,
  imports: [
    DatePipe,
    UcSunComponent
  ],
  templateUrl: './uc-weather-card.component.html',
  styleUrl: './uc-weather-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UcWeatherCardComponent {
  weatherData = input<CurrentWeather | null>(null);
  currentDate: Date = new Date();
}
