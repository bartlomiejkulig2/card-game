import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store, StoreModule } from '@ngrx/store';

import * as DataAPIActions from '../../store/actions/data.actions';
import { ActionButtonComponent } from './action-button.component';
import { appReducers } from '../../store/reducers/app.reducers';
import { IAppState } from '../../models/IAppState';
import { getInitialState } from '../../store/state/app.state';



describe('ActionButtonComponent', () => {
  let store: MockStore<IAppState>;
  const initialState = getInitialState();
  let component: ActionButtonComponent;
  let fixture: ComponentFixture<ActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appReducers)],
      declarations: [ ActionButtonComponent ],
      providers: [provideMockStore({initialState})]
    })
    .compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getRandomCards()', () => {
    it('should dispatch action', () => {
      component.getRandomCards();

      expect(store.dispatch).toHaveBeenCalledWith(DataAPIActions.getRandom());
    });
  });

  describe('ngOnDestroy()', () => {
    it('should unsubscribe from storeSubscription', () => {
      spyOn(component.storeSubscription, 'unsubscribe');

      component.ngOnDestroy();

      expect(component.storeSubscription.unsubscribe).toHaveBeenCalled();
    });
  });
});
