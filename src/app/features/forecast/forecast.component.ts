import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UcSearchBarComponent} from "../../components/uc-search-bar/uc-search-bar.component";
import {UcWeatherCardComponent} from "../../components/uc-weather-card/uc-weather-card.component";

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
export class ForecastComponent {

}
