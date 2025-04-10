import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'uc-weather-card',
  standalone: true,
  imports: [],
  templateUrl: './uc-weather-card.component.html',
  styleUrl: './uc-weather-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UcWeatherCardComponent {

}
