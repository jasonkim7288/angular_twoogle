import { AppState } from '../../app.state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TwootsService } from '../../services/twoots.service';
import { UsersService } from '../../services/users.service';

import { Store } from '@ngrx/store';
import * as TwootsActions from '../../config/twoots.actions'
import { Twoot } from '../../models/twoot.model';
import * as UsersActions from '../../config/users.actions'
import { User } from '../../models/user.model';

@Component({
  selector: 'app-twoots',
  templateUrl: './twoots.component.html',
  styleUrls: ['./twoots.component.scss']
})
export class TwootsComponent implements OnInit {
  twoots: Observable<Twoot[]>;
  users: Observable<User[]>;
  twootsKeys: string[];

  constructor(
    private twootsService: TwootsService,
    private usersService: UsersService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(users => {
      this.store.dispatch(new UsersActions.SetUsers(users));
      console.log('users:', users);
      this.users = this.store.select('users');
    })
    this.twootsService.getTwoots().subscribe(twoots => {
      this.store.dispatch(new TwootsActions.SetTwoots(twoots));
      console.log('twoots:', twoots);
      this.twoots = this.store.select('twoots');
      this.twoots.subscribe(twoots => {
        this.twootsKeys = Object.keys(twoots);
      })
    });
  }
}
