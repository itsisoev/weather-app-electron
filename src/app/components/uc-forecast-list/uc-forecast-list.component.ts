import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'uc-forecast-list',
  standalone: true,
  imports: [],
  templateUrl: './uc-forecast-list.component.html',
  styleUrl: './uc-forecast-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UcForecastListComponent {

}
