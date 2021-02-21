import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private db: AngularFireDatabase) { }

  getAllUsers(): Observable<any[]> {
    return this.db.list('/').valueChanges().pipe(map((changes: any[]) => changes.length === 2 ? changes[1] : changes));
  }
}
