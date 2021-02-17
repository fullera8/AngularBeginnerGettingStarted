import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component ({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 4;
  starWidth: number;
  @Output() ratingClick: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 75/5;
  }

  OnClick(): void {
    this.ratingClick.emit(`rating ${this.rating} clicked`);
  }
}
