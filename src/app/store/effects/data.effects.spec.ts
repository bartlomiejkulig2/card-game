import { TestBed } from '@angular/core/testing';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store, StoreModule } from '@ngrx/store';

import { of, ReplaySubject, throwError } from 'rxjs';

import * as DataAPIActions from '../actions/data.actions';
import { CardService } from '../../services/card-service/card.service';
import { DataStoreEffects } from './data.effects';
import { getInitialState } from '../state/app.state';
import { IAppState } from '../../models/IAppState';
import { IPerson } from '../../models/IPerson';
import { IStarship } from '../../models/IStarship';



const mockPeople: IPerson[] | any = [
  { name: 'Luke Skywalker', height: '172', mass: '77' },
  { name: 'C-3PO', height: '167', mass: '75' }
];

const mockShips: IStarship[] | any = [
  { name: 'Executor', model: 'Executor-class star dreadnought', crew: '279144' },
  { name: 'Sentinel-class landing craft', model: 'Sentinel-class landing craft' , crew: '5' }
];

describe('DataEffects', () => {
  let store: MockStore<IAppState>;
  const initialState = getInitialState();
  let dataEffects: DataStoreEffects;
  let cardService: CardService;
  let actions$: ReplaySubject<any>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({})
    ],
    providers: [
      DataStoreEffects,
      provideMockActions(() => actions$),
      provideMockStore({initialState}),
      {
        provide: CardService,
        useValue: jasmine.createSpyObj('cardService', ['getPeople', 'getShips']),
      },
    ],
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    dataEffects = TestBed.get(DataStoreEffects);
    cardService = TestBed.get(CardService);
    (cardService.getPeople as jasmine.Spy).and.returnValue(of(mockPeople));
    (cardService.getShips as jasmine.Spy).and.returnValue(of(mockShips));
  });

  describe('fetchAllData$', () => {
    beforeEach(() => {
      actions$ = new ReplaySubject(1);
      actions$.next(DataAPIActions.fetchAllRequested());
    });

    it('should return a DataAPIActions.fetchAllSucceeded action on success', () => {
      dataEffects.fetchAllData$.subscribe(resultAction => {
        expect(resultAction).toEqual(DataAPIActions.fetchAllSucceeded({people: mockPeople, starships: mockShips}));
      });
    });

    it('should return DataAPIActions.fetchAllFailed action on failure', () => {
      (cardService.getPeople as jasmine.Spy).and.returnValue(throwError({status: 404, message: 'Not found'}));

      dataEffects.fetchAllData$.subscribe(resultAction => {
        expect(resultAction).toEqual(DataAPIActions.fetchAllFailed({error: 'Not found'}));
      });
    });
  });
});
