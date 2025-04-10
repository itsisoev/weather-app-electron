import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ThemeToggleComponent} from "../../features/toggle/theme-toggle/theme-toggle.component";
import {CelsiusToggleComponent} from "../../features/toggle/celsius-toggle/celsius-toggle.component";
import {FahrenheitToggleComponent} from "../../features/toggle/fahrenheit-toggle/fahrenheit-toggle.component";
import {UcSettingComponent} from "../uc-setting/uc-setting.component";

@Component({
  selector: 'uc-header',
  standalone: true,
  imports: [
    ThemeToggleComponent,
    CelsiusToggleComponent,
    FahrenheitToggleComponent,
    UcSettingComponent
  ],
  templateUrl: './uc-header.component.html',
  styleUrl: './uc-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UcHeaderComponent {
}
