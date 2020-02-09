import { createSelector } from '@ngrx/store';

import { IAppState } from '../../models/IAppState';
import { IConfig } from '../../models/IConfig';



const configState = (state: IAppState) => state.config;

export const selectResource = createSelector(
  configState,
  (state: IConfig) => state.pickedResource
);
