import { NewTwootComponent } from './components/new-twoot/new-twoot.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwootsComponent } from './components/twoots/twoots.component';
import { TwootComponent } from './components/twoot/twoot.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: TwootsComponent },
  { path: 'twoots/new', component: NewTwootComponent },
  { path: 'twoots/:id/comments/new', component: NewTwootComponent },
  { path: 'twoots/:id/edit', component: NewTwootComponent},
  { path: 'twoots/:id', component: TwootComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
