import * as PlayersAPIActions from '../actions/players.actions';
import { IPlayers } from '../../models/IPlayers';
import { playersReducers } from './players.reducers';
import { IPerson } from '../../models/IPerson';


describe('playersReducers', () => {
  let initialState: IPlayers;
  beforeEach(() => {
    initialState = {
      0: {id: 0, score: 0, card: null, winner: false},
      1: {id: 1, score: 0, card: null, winner: false}
    };
  });

  describe('PlayersActionTypes.addScoreToPlayer', () => {
    it('should add 1 point to player score', () => {
      console.log('PlayersActionTypes.addScoreToPlayer', initialState);
      const action = PlayersAPIActions.addScoreToPlayer({id: 0});
      const newState = playersReducers(initialState, action);
      const expectedState = {
        ...initialState,
        0: {id: 0, score: 1, card: null, winner: false}
      };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('PlayersActionTypes.addWinnerStatusToPlayer', () => {
    it('should add winner status to player', () => {
      console.log('PlayersActionTypes.addWinnerStatusToPlayer', initialState);
      const action = PlayersAPIActions.addWinnerStatusToPlayer({id: 0, winner: true});
      const newState = playersReducers(initialState, action);
      const expectedState = {
        ...initialState,
        0: {id: 0, score: 0, card: null, winner: true},
        1: {id: 1, score: 0, card: null, winner: false}
      };

      expect(newState).toEqual(expectedState);
    });
  });


  describe('PlayersActionTypes.addCardsToPlayer', () => {
    it('should add cards to two players', () => {
      console.log('PlayersActionTypes.addCardsToPlayer', initialState);
      const randomCards: IPerson[] = [
        { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', eye_color: 'blue',
          birth_year: '19BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/1/', films: null, species: null,
          vehicles: null, starships: null, created: '2014-12-09T13:50:51.644000Z', edited: '2014-12-20T21:17:56.891000Z',
          url: 'https://swapi.co/api/people/1/' },
        { name: 'C-3PO', height: '167', mass: '75', hair_color: 'n/a', skin_color: 'gold', eye_color: 'yellow', birth_year: '112BBY',
          gender: 'n/a', homeworld: 'https://swapi.co/api/planets/1/', films: [], species: [], vehicles: [], starships: [],
          created: '2014-12-10T15:10:51.357000Z', edited: '2014-12-20T21:17:50.309000Z', url: 'https://swapi.co/api/people/2/' }
      ];

      const action = PlayersAPIActions.addCardsToPlayer({cards: randomCards});
      const newState = playersReducers(initialState, action);
      const expectedState = {
        ...initialState,
        0: {id: 0, score: 0, card: randomCards[0], winner: false},
        1: {id: 1, score: 0, card: randomCards[1], winner: false}
      };

      expect(newState).toEqual(expectedState);
    });
  });
});
