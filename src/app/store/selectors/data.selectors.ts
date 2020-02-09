import { createSelector } from '@ngrx/store';

import { IAppState } from '../../models/IAppState';
import { IData } from '../../models/IData';



const dataState = (state: IAppState) => state.data;

export const selectPeople = createSelector(
  dataState,
  (state: IData) => Object.values(state.people)
);

export const selectStarships = createSelector(
  dataState,
  (state: IData) => Object.values(state.starships)
);
