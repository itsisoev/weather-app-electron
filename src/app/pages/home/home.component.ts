import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UcHeaderComponent} from "../../components/uc-header/uc-header.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        UcHeaderComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
