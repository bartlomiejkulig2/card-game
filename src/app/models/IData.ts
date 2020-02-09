import { IPerson } from './IPerson';
import { IStarship } from './IStarship';



export interface IData {
  people: {[id: number]: IPerson};
  starships: {[id: number]: IStarship};
  error: string;
  isLoading: boolean;
}
