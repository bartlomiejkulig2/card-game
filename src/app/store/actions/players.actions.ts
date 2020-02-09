import { createAction, props } from '@ngrx/store';

import { IStarship } from '../../models/IStarship';
import { IPerson } from '../../models/IPerson';



export const addScoreToPlayer = createAction(
  '[Players Actions] Add Score Point To Player',
  props<{ id: number }>()
);

export const addWinnerStatusToPlayer = createAction(
  '[Players Actions] Add Winner Details To Player',
  props<{ id: number, winner: boolean }>()
);

export const addCardsToPlayer = createAction(
  '[Players Actions] Add Cards To Players',
  props<{ cards: IStarship[] | IPerson[] }>()
);
