import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as DataAPIActions from './store/actions/data.actions';
import { IAppState } from './models/IAppState';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(DataAPIActions.fetchAllRequested());
  }
}
