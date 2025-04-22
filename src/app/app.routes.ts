import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BracketPageComponent } from './pages/bracket-page/bracket-page.component'; // Ajustez le chemin selon votre structure
import { Sign } from 'crypto';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'bracket', component: BracketPageComponent },
  { path: 'sign-up', component: SignUpPageComponent},
  { path: 'history', component: HistoryPageComponent},
  { path: 'calendar', component: CalendarPageComponent},
  { path: '**', redirectTo: '/home' }
];