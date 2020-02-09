import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IPeopleRequestResult } from '../../models/IPeopleRequestResult';
import { IPerson } from '../../models/IPerson';
import { IStarship } from '../../models/IStarship';
import { IStarshipsRequestResult } from '../../models/IStarshipsRequestResult';



@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<IPerson[]> {
    return this.http
      .get<IPeopleRequestResult>(`api/people`)
      .pipe(map(result => result.results));
  }

  getShips(): Observable<IStarship[]> {
    return this.http
      .get<IStarshipsRequestResult>(`api/starships`)
      .pipe(map(result => result.results));
  }
}
