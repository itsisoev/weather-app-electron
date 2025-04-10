import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'celsius-toggle',
  standalone: true,
  imports: [],
  templateUrl: './celsius-toggle.component.html',
  styleUrl: './celsius-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CelsiusToggleComponent {
  isCelsiusActive = signal<boolean>(true);
  isDarkTheme = signal<boolean>(false)

  toggleTheme() {
    this.isDarkTheme.set(!this.isDarkTheme());
    document.body.classList.toggle('dark-theme', this.isDarkTheme());
  }
}
