import { Component } from '@angular/core';
import { CardInfo } from '../cards';
import { CARDS, CARDSDATACOLOR } from '../mock-cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardTitles = CARDS;
  cardColors = CARDSDATACOLOR;
  selectedCard?: CardInfo;
  onClick(cardTitle: CardInfo): void {
    this.selectedCard = cardTitle;
  }
  index = 2;
  SaverClick(cardTitle: CardInfo): void {
    this.selectedCard = cardTitle;
  }
}