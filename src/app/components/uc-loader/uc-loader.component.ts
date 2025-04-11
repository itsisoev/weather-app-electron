import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'uc-loader',
  standalone: true,
  imports: [],
  templateUrl: './uc-loader.component.html',
  styleUrl: './uc-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UcLoaderComponent {

}
