import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';

import { MatCardModule, MatChipsModule } from '@angular/material';

import { CardContainerComponent } from './card-container.component';
import { ResultComponent } from '../result/result.component';
import { CardComponent } from '../card/card.component';
import { appReducers } from '../../store/reducers/app.reducers';



describe('CardContainerComponent', () => {
  let component: CardContainerComponent;
  let fixture: ComponentFixture<CardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatChipsModule,
        MatCardModule,
        StoreModule.forRoot(appReducers)
      ],
      declarations: [
        CardContainerComponent,
        ResultComponent,
        CardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
