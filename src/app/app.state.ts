import { User } from './models/user.model';
import { Twoot } from './models/twoot.model';

export interface AppState {
  readonly twoots: Twoot[];
  readonly users: User[];
}