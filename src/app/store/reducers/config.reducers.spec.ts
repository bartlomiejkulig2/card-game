import * as ConfigAPIActions from '../actions/config.actions';
import { IConfig } from '../../models/IConfig';
import { Resource } from '../../models/Resource';
import { configReducers } from './config.reducers';



describe('configReducers', () => {
  let initialState: IConfig;
  beforeEach(() => {
    initialState = {
      pickedResource: Resource.People
    };
  });

  describe('ConfigActionTypes.pickedResourceChange', () => {
    it('should update pickedResource form People to Starships', () => {
      // set default value
      initialState.pickedResource = Resource.People;

      const action = ConfigAPIActions.pickedResourceChange({pickedResource: Resource.Starships});
      const newState = configReducers(initialState, action);
      const expectedState = {...initialState, pickedResource: Resource.Starships};

      expect(newState).toEqual(expectedState);
    });

    it('the value should stay same if action value is the same', () => {
      // set default value
      initialState.pickedResource = Resource.People;

      const action = ConfigAPIActions.pickedResourceChange({pickedResource: Resource.People});
      const newState = configReducers(initialState, action);
      const expectedState = {...initialState, pickedResource: Resource.People};

      expect(newState).toEqual(expectedState);
    });
  });
});
