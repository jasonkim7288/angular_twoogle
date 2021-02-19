import { Twoot } from '../models/twoot.model';
import { Action } from '@ngrx/store';

export const SET_TWOOTS = '[Twoots] Set';

export class SetTwoots implements Action {
  readonly type = SET_TWOOTS;

  constructor(public payload: Twoot[]) {}
}

export type All = SetTwoots;