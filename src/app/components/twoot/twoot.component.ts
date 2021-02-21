import { Twoot } from './../../models/twoot.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoot',
  templateUrl: './twoot.component.html',
  styleUrls: ['./twoot.component.scss']
})
export class TwootComponent implements OnInit {
  @Input() paramTwoot: Twoot;
  constructor() { }

  ngOnInit(): void {

  }

}
