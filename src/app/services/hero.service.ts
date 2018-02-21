import { Injectable } from '@angular/core';
import {Hero} from '../classes/hero';
import {HEROES} from '../mocks/mock-heroes';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';


@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHeroesDep(): Hero[] {
    return HEROES;
  }
}