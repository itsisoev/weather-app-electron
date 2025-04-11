import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'uc-search-bar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './uc-search-bar.component.html',
  styleUrl: './uc-search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UcSearchBarComponent {
  placeholder = input<string>("")
  searchChange = output<string>();

  search: string = "";

  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe(value => {
      this.searchChange.emit(value);
    });
  }

  onSearchChange() {
    this.searchSubject.next(this.search);
  }
}
