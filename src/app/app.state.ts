import { Twoot } from './models/twoot.model';

export interface Appstate {
  readonly twoots: Twoot[];
}