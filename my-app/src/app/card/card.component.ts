import { Component } from '@angular/core';
import { CardInfo } from '../cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardTitle : CardInfo = {
      band:"Slipknot",
      album:"All hope is gone"
  }
}