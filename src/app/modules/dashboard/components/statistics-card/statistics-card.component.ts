import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StatisticsCard } from '@shared/models';

@Component({
  selector: 'app-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrl: './statistics-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsCardComponent {
  @Input() statisticsCard: StatisticsCard;
  readonly faArrowRight = faArrowRight;
}
