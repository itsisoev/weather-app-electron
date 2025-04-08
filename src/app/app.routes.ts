import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CardWeatherComponent} from "./shared/components/card-weather/card-weather.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: CardWeatherComponent
      }
    ]
  }
];
