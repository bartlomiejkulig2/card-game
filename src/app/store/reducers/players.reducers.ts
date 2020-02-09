import { Action, createReducer, on } from '@ngrx/store';

import * as PlayersAPIActions from '../actions/players.actions';
import { initialPlayersState } from '../state/players.state';
import { IPlayers } from '../../models/IPlayers';



const playersReducersCreator = createReducer(
  initialPlayersState,
  on(PlayersAPIActions.addScoreToPlayer, (state, action) => {
    const players = {...state};
    players[action.id].score++;
    return players;
  }),
  on(PlayersAPIActions.addWinnerStatusToPlayer, (state, action) => {
    const players = {...state};
    players[0].winner = action.winner;
    players[1].winner = !action.winner;
    return players;
  }),
  on(PlayersAPIActions.addCardsToPlayer, (state, action) => {
    const players = {...state};
    players[0].card = action.cards[0];
    players[1].card = action.cards[1];
    return players;
  })
);


export function playersReducers(state: IPlayers, action: Action) {
  return playersReducersCreator(state, action);
}
