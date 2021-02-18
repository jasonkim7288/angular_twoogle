import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TwootsService {
  constructor(private db: AngularFireDatabase) { }

  getTwoots(): Observable<any[]> {
    return this.db.list('/twoots').valueChanges();
  }
}
