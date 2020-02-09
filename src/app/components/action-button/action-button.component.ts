import { Component, OnDestroy, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import * as DataAPIActions from '../../store/actions/data.actions';
import { IAppState } from '../../models/IAppState';
import { selectPeople } from '../../store/selectors/data.selectors';



@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit, OnDestroy {
  isDataReady: boolean;
  store$ = this.store.pipe(select(selectPeople));
  storeSubscription: Subscription;

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.storeSubscription = this.store$.subscribe(data => this.isDataReady = !!data.length);
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  getRandomCards(): void {
    this.store.dispatch(DataAPIActions.getRandom());
  }
}
