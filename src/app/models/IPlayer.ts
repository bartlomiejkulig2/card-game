import { IPerson } from './IPerson';
import { IStarship } from './IStarship';



export interface IPlayer {
  id: number;
  score: number;
  card: IPerson | IStarship;
  winner: boolean;
}
