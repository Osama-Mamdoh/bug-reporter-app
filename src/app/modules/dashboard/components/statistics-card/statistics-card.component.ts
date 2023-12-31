import { Component, Input } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StatisticsCard } from '@shared/models';

@Component({
  selector: 'app-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrl: './statistics-card.component.scss'
})
export class StatisticsCardComponent {
  @Input() data: StatisticsCard;
  faArrowRight = faArrowRight;
}
