import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { Store, StoreModule } from '@ngrx/store';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ResourcePickerComponent } from './resource-picker.component';
import { IAppState } from '../../models/IAppState';
import { pickedResourceChange } from '../../store/actions/config.actions';
import { Resource } from '../../models/Resource';
import { getInitialState } from '../../store/state/app.state';



describe('ResourcePickerComponent', () => {
  let store: MockStore<IAppState>;
  const initialState = getInitialState();
  let component: ResourcePickerComponent;
  let fixture: ComponentFixture<ResourcePickerComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        MatButtonToggleModule,
        StoreModule.forRoot({})
      ],
      declarations: [ ResourcePickerComponent ],
      providers: [provideMockStore({initialState})]
    })
    .compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onValueChange()', () => {
    it('should dispatch action', () => {
      component.onValueChange(Resource.People);

      expect(store.dispatch).toHaveBeenCalledWith(pickedResourceChange({pickedResource: Resource.People}));
    });
  });
});
