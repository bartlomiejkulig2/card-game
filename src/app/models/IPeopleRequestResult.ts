import {IPerson} from './IPerson';



export interface IPeopleRequestResult {
  count: number;
  next: string;
  previous: string;
  results: IPerson[];
}
