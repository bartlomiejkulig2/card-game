import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { forkJoin, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import * as DataAPIActions from '../actions/data.actions';
import * as PlayersAPIActions from '../actions/players.actions';
import { CardService } from '../../services/card-service/card.service';
import { selectPeople, selectStarships } from '../selectors/data.selectors';
import { IAppState } from '../../models/IAppState';
import { selectResource } from '../selectors/config.selectors';
import { Resource } from '../../models/Resource';
import { IPerson } from '../../models/IPerson';
import { IStarship } from '../../models/IStarship';



@Injectable()
export class DataStoreEffects {


  constructor(private cardService: CardService, private actions$: Actions, private store$: Store<IAppState>) {}


  fetchAllData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataAPIActions.fetchAllRequested),
      mergeMap(() =>
        forkJoin([this.cardService.getPeople(), this.cardService.getShips()]).pipe(
          map( ([people, starships]) => DataAPIActions.fetchAllSucceeded({ people, starships })),
          catchError(error =>
            of(DataAPIActions.fetchAllFailed({ error: error.message }))
          )
        )
      )
    )
  );


  getRandomCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataAPIActions.getRandom),
      concatMap(action => of(action).pipe(
        withLatestFrom(
          this.store$.pipe(select(selectResource)),
          this.store$.pipe(select(selectPeople)),
          this.store$.pipe(select(selectStarships))
        )
      )),
      switchMap(([action, resource, people, starships]) => {
        // get Random Cards
        const isPeople: boolean = resource === Resource.People;
        const pickedArray = isPeople ? people : starships;
        const randomCards = pickedArray.sort(() => 0.5 - Math.random()).slice(0, 2);

        // check the Winner
        const didPlayer1Win: boolean = isPeople
          ? parseInt((randomCards[0] as IPerson).mass, 10) > parseInt((randomCards[1] as IPerson).mass, 10)
          : parseInt((randomCards[0] as IStarship).crew, 10) > parseInt((randomCards[1] as IStarship).crew, 10);
        return [
          PlayersAPIActions.addCardsToPlayer({cards: randomCards}),
          PlayersAPIActions.addScoreToPlayer({id: didPlayer1Win ? 0 : 1}),
          PlayersAPIActions.addWinnerStatusToPlayer({id: 0, winner: didPlayer1Win}),
        ];
      })
    )
  );


  showAlertOnFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(DataAPIActions.fetchAllFailed),
        tap(({ error }) => window.alert(error))
      ),
    { dispatch: false }
  );
}
