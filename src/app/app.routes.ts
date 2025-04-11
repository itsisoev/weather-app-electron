import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ForecastPageComponent} from "./pages/forecast-page/forecast-page.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: ':city',
        component: ForecastPageComponent,
      }
    ]
  }
];
