import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {WeatherCurrent} from "../../models/weather";

@Component({
  selector: 'uc-weather-highlights',
  standalone: true,
  imports: [],
  templateUrl: './uc-weather-highlights.component.html',
  styleUrl: './uc-weather-highlights.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UcWeatherHighlightsComponent {
  weatherInfo = input<WeatherCurrent>();
}
