import { IData } from './IData';
import { IConfig } from './IConfig';
import {IPlayer} from './IPlayer';



export interface IAppState {
  data: IData;
  config: IConfig;
  players: {[id: number]: IPlayer};
}
