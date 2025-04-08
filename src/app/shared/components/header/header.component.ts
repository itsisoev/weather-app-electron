import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'uc-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  city: string = "Moscow";
  private cityInput$ = new Subject<string>();

  weatherService = inject(WeatherService);

  constructor() {
  }

  ngOnInit() {
    this.cityInput$
      .pipe(debounceTime(1500))
      .subscribe(city => {
        this.weatherService.setCity(city);
      });
  }

  onCityChange() {
    this.cityInput$.next(this.city);
  }
}
