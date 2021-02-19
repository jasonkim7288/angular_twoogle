import * as TwootsActions from './twoots.actions';
import { Twoot } from './../models/twoot.model';

export type Action = TwootsActions.All;

const defaultState: {twoots: Twoot[];} = {twoots: []};

export function twootsReducer(state: Twoot, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case TwootsActions.SET_TWOOTS:
      return {
        ...state,
        twoots: action.payload
      };
    default:
      return state;
  }
}