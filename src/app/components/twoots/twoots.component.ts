import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TwootsService } from 'src/app/services/twoots.service';

import { Store } from '@ngrx/store';
import * as TwootsActions from '../../config/twoots.actions'
import { Twoot } from '../../models/twoot.model';


interface TwootsState {
  twoots: Twoot[]
}

@Component({
  selector: 'app-twoots',
  templateUrl: './twoots.component.html',
  styleUrls: ['./twoots.component.scss']
})
export class TwootsComponent implements OnInit {
  twoots: Observable<{twoots: Twoot[]}> | null = null;

  constructor(
    private twootsService: TwootsService,
    private store: Store<TwootsState>
  ) { }

  ngOnInit(): void {
    this.twootsService.getTwoots().subscribe(twoots => {
      this.store.dispatch(new TwootsActions.SetTwoots(twoots));
      this.twoots = this.store.select('twoots');
    });
  }
}
