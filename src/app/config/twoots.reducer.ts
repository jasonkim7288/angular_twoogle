import * as TwootsActions from './twoots.actions';
import { Twoot } from './../models/twoot.model';

export type Action = TwootsActions.All;

export function twootsReducer(state: Twoot[], incomingAction: Action) {
  console.log(incomingAction.type, state);

  const action = incomingAction as Action;

  switch (action.type) {
    case TwootsActions.SET_TWOOTS:
      return action.payload;
    default:
      return state;
  }
}