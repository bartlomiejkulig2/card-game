import { Component } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { IAppState } from '../../models/IAppState';
import { selectPlayers } from '../../store/selectors/players.selectors';



@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {
  players$ = this.store.pipe(select(selectPlayers));

  constructor(private store: Store<IAppState>) { }

}
