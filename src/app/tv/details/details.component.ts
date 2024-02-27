import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  showId: string = '';

  @Input() set id(showId: string) {
    this.showId = showId;
  }
}
