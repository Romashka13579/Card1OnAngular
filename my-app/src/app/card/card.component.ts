import { Component } from '@angular/core';
import { CardInfo } from '../cards';
import { CARDS } from '../mock-cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardTitles = CARDS;
  selectedCard?: CardInfo;
  onSelect(cardTitle: CardInfo): void {
    this.selectedCard = cardTitle;
  }
  index = 2;
}