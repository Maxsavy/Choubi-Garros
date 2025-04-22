import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-players-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.css'
})
export class PlayersPageComponent {
  players: Player[] = [
    {
      id: 1,
      name: 'Roger Federer',
      email: 'roger.federer@tennis.com',
      avatarUrl: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
      status: 'Active',
      level: 'Pro',
      ranking: 1
    },
    {
      id: 2,
      name: 'Rafael Nadal',
      email: 'rafael.nadal@tennis.com',
      avatarUrl: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
      status: 'Onboarding',
      level: 'Pro',
      ranking: 2
    },
    {
      id: 3,
      name: 'Serena Williams',
      email: 'serena.williams@tennis.com',
      avatarUrl: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
      status: 'Awaiting',
      level: 'Pro',
      ranking: 3
    },
    {
      id: 4,
      name: 'Novak Djokovic',
      email: 'novak.djokovic@tennis.com',
      avatarUrl: 'https://mdbootstrap.com/img/new/avatars/3.jpg',
      status: 'Removed',
      level: 'Pro',
      ranking: 4
    },
    {
      id: 5,
      name: 'Maria Sharapova',
      email: 'maria.sharapova@tennis.com',
      avatarUrl: 'https://mdbootstrap.com/img/new/avatars/5.jpg',
      status: 'Active',
      level: 'Pro',
      ranking: 5
    },
    {
      id: 6,
      name: 'Andy Murray',
      email: 'andy.murray@tennis.com',
      avatarUrl: 'https://mdbootstrap.com/img/new/avatars/4.jpg',
      status: 'Onboarding',
      level: 'Pro',
      ranking: 6
    }
  ];

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'active': return 'badge-active';
      case 'awaiting': return 'badge-pending';
      case 'onboarding': return 'badge-inactive';
      case 'removed': return 'badge-removed';
      default: return 'badge-inactive';
    }
  }
}
