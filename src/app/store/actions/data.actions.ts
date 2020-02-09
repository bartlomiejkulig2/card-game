import { createAction, props } from '@ngrx/store';

import { IPerson } from '../../models/IPerson';
import { IStarship } from '../../models/IStarship';



export const fetchAllSucceeded = createAction(
  '[Data Actions] Fetch All Succeeded',
  props<{ people: IPerson[], starships: IStarship[] }>()
);

export const fetchAllFailed = createAction(
  '[Data Actions] Fetch All Failed',
  props<{ error: string }>()
);

export const fetchAllRequested = createAction(
  '[Data Actions] Fetch All Requested'
);

export const getRandom = createAction(
  '[Data Actions] Get 2 Random Entities'
);
