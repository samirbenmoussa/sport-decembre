import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { ContacttComponent } from './components/contactt/contactt.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatcheComponent } from './components/matche/matche.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'contactt', component: ContacttComponent},
  {path: 'matche', component: MatcheComponent},
  {path: 'all-matches', component: AllMatchesComponent},
  {path: 'add-match', component: AddMatchComponent}




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
