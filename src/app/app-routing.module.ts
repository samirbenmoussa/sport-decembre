import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { AllPlayerComponent } from './components/all-player/all-player.component';
import { ContacttComponent } from './components/contactt/contactt.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatcheComponent } from './components/matche/matche.component';
import { PlayersComponent } from './components/players/players.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'contactt', component: ContacttComponent},
  {path: 'matche', component: MatcheComponent},
  {path: 'all-matches', component: AllMatchesComponent},
  {path: 'add-match', component: AddMatchComponent},
  {path: 'add-player', component: AddPlayerComponent},
  {path: 'all-player', component: AllPlayerComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'admin', component: AdminComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
