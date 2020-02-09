import * as DataAPIActions from '../actions/data.actions';
import { IData } from '../../models/IData';
import { IPerson } from '../../models/IPerson';
import { IStarship } from '../../models/IStarship';
import { dataReducers } from './data.reducers';



describe('dataReducers', () => {
  let initialState: IData;
  beforeEach(() => {
    initialState = {
      people: {},
      starships: {},
      error: null,
      isLoading: false
    };
  });

  describe('DataActionTypes.fetchAllSucceeded', () => {
    it('should update data when fetched correctly', () => {
      const actionData: { people: IPerson[], starships: IStarship[] } = {
        people: [
          {name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/1/', films: null, species: null, vehicles: null, starships: null, created: '2014-12-09T13:50:51.644000Z', edited: '2014-12-20T21:17:56.891000Z', url: 'https://swapi.co/api/people/1/'},
        ],
        starships: []
      };
      const action = DataAPIActions.fetchAllSucceeded(actionData);
      const newState = dataReducers(initialState, action);
      const expectedState = {
        ...initialState,
        people: {0: actionData.people[0]},
        starships: {}
      };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('DataActionTypes.fetchAllRequested', () => {
    it('should set isLoading indicator', () => {
      const action = DataAPIActions.fetchAllRequested();
      const newState = dataReducers(initialState, action);
      const expectedState = {
        ...initialState,
        isLoading: true
      };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('DataActionTypes.fetchAllFailed', () => {
    it('should set error on failure', () => {
      const action = DataAPIActions.fetchAllFailed({error: 'Fetching failed'});
      const newState = dataReducers(initialState, action);
      const expectedState = {
        ...initialState,
        error: 'Fetching failed'
      };

      expect(newState).toEqual(expectedState);
    });
  });
});
