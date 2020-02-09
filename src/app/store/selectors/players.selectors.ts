import { IAppState } from '../../models/IAppState';



export const selectPlayers = (state: IAppState) => Object.values(state.players);

