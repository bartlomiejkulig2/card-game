import { Action, createReducer, on } from '@ngrx/store';

import * as DataAPIActions from '../actions/data.actions';
import { initialDataState } from '../state/data.state';
import { IData } from '../../models/IData';



const dataReducersCreator = createReducer(
  initialDataState,
  on(DataAPIActions.fetchAllSucceeded, (state, action) => (
    { ...state,
      people: action.people.reduce((obj, person, index) => { obj[index] = person; return obj; }, {}),
      starships: action.starships.reduce((obj, starship, index) => { obj[index] = starship; return obj; }, {}),
      isLoading: false,
      error: null
    })),
  on(DataAPIActions.fetchAllRequested, (state, action) => (
    { ...state,
      people: {},
      starships: {},
      isLoading: true,
      error: null
    })),
  on(DataAPIActions.fetchAllFailed, (state, action) => (
    { ...state,
      people: {},
      starships: {},
      isLoading: false,
      error: action.error
    })),
);

export function dataReducers(state: IData, action: Action) {
  return dataReducersCreator(state, action);
}
