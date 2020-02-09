import { initialConfigState } from './config.state';
import { initialPlayersState } from './players.state';
import { initialDataState } from './data.state';
import { IAppState } from '../../models/IAppState';



export const initialAppState: IAppState = {
  data: initialDataState,
  config: initialConfigState,
  players: initialPlayersState
};

export function getInitialState() {
  return initialAppState;
}
