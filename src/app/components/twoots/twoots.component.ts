import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TwootsService } from 'src/app/services/twoots.service';

@Component({
  selector: 'app-twoots',
  templateUrl: './twoots.component.html',
  styleUrls: ['./twoots.component.scss']
})
export class TwootsComponent implements OnInit {
  twoots: any[] | null = null;

  constructor(private twootsService: TwootsService) { }

  ngOnInit(): void {
    this.twootsService.getTwoots().subscribe(twoots => {
      this.twoots = twoots;
    });
  }
}
