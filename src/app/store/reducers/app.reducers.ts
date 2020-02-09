import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../../models/IAppState';
import { configReducers } from './config.reducers';
import { dataReducers } from './data.reducers';
import { playersReducers } from './players.reducers';



export const appReducers: ActionReducerMap<IAppState, any> = {
  data: dataReducers,
  config: configReducers,
  players: playersReducers
};
