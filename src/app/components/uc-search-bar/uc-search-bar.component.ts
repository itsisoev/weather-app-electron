import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'uc-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './uc-search-bar.component.html',
  styleUrl: './uc-search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UcSearchBarComponent {
  placeholder = input<string>("")
}
