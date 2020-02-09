import { Action, createReducer, on } from '@ngrx/store';

import * as ConfigAPIActions from '../actions/config.actions';
import { initialConfigState } from '../state/config.state';
import { IConfig } from '../../models/IConfig';



const configReducersCreator = createReducer(
  initialConfigState,
  on(ConfigAPIActions.pickedResourceChange, (state, action) => (
    { ...state,
      pickedResource: action.pickedResource
    })),
);

export function configReducers(state: IConfig, action: Action) {
  return configReducersCreator(state, action);
}
