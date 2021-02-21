import { Observable } from 'rxjs';
import { AppState } from './../../app.state';
import { Twoot } from './../../models/twoot.model';
import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-twoot',
  templateUrl: './twoot.component.html',
  styleUrls: ['./twoot.component.scss']
})
export class TwootComponent implements OnInit {
  @Input() paramTwootId: string;
  @Input() linkNeeded: boolean = false;
  twoots: Observable<Twoot[]>;
  users: Observable<User[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.twoots = this.store.select('twoots');
    this.users = this.store.select('users');
    console.log('paramTwootId:', this.paramTwootId);
    // console.log('twoots[paramTwootId]:', this.twoots[this.paramTwootId])
  }

  private getUser = (id) => {
    console.log('id:', id)
    console.log('this.users[id]:', this.users[id]);
    return this.users[id];
  }

}
