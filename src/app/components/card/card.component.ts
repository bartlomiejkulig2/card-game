import { Component, Input } from '@angular/core';

import { IPerson } from '../../models/IPerson';
import { IStarship } from '../../models/IStarship';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: IPerson | IStarship;
  @Input() winner: boolean;
  constructor() { }

}
