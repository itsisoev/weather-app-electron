import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'fahrenheit-toggle',
  standalone: true,
  imports: [],
  templateUrl: './fahrenheit-toggle.component.html',
  styleUrl: './fahrenheit-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FahrenheitToggleComponent {
  isCelsiusActive = signal<boolean>(false);
}
