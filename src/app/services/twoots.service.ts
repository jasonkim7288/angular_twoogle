import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwootsService {
  constructor(private db: AngularFireDatabase) { }

  getTwoots(): Observable<any[]> {
    return this.db.list('/').valueChanges().pipe(map((changes: any[]) => changes.length === 2 ? changes[0] : changes));
  }
}
