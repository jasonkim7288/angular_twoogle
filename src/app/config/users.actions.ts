import { User } from '../models/user.model';
import { Action } from '@ngrx/store';

export const SET_USERS = '[USERS] Set';

export class SetUsers implements Action {
  readonly type = SET_USERS;

  constructor(public payload: User[]) {}
}

export type All = SetUsers;