import * as UsersActions from './users.actions';
import { User } from '../models/user.model';

export type Action = UsersActions.All;

export function usersReducer(state: User[], incomingAction: Action) {
  console.log(incomingAction.type, state);

  const action = incomingAction as Action;

  switch (action.type) {
    case UsersActions.SET_USERS:
      return action.payload;
    default:
      return state;
  }
}