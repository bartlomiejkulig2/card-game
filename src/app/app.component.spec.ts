import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StoreModule } from '@ngrx/store';

import { MatButtonToggleModule, MatCardModule, MatChipsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ResourcePickerComponent } from './components/resource-picker/resource-picker.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { ResultComponent } from './components/result/result.component';
import { CardComponent } from './components/card/card.component';
import { appReducers } from './store/reducers/app.reducers';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatCardModule,
        StoreModule.forRoot(appReducers)
      ],
      declarations: [
        AppComponent,
        ResourcePickerComponent,
        CardContainerComponent,
        ActionButtonComponent,
        ResultComponent,
        CardComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
