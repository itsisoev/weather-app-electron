import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UcHeaderComponent} from "../../components/uc-header/uc-header.component";
import {ForecastComponent} from "../../features/forecast/forecast.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UcHeaderComponent,
    ForecastComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
