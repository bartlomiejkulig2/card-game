import { IStarship } from './IStarship';



export interface IStarshipsRequestResult {
  count: number;
  next: string;
  previous: string;
  results: IStarship[];
}
