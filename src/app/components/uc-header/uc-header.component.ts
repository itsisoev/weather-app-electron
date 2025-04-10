import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'uc-header',
  standalone: true,
  imports: [],
  templateUrl: './uc-header.component.html',
  styleUrl: './uc-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UcHeaderComponent {
  private themeService = inject(ThemeService);

  isDarkMode = this.themeService.isDarkMode;

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
