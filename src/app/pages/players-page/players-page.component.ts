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
      status: 'En lice',
      level: 10,
    },
    {
      id: 2,
      name: 'Rafael Nadal',
      email: 'rafael.nadal@tennis.com',
      status: 'En lice',
      level: 10,
    },
    {
      id: 3,
      name: 'Serena Williams',
      email: 'serena.williams@tennis.com',
      status: 'En lice',
      level: 9,
    },
    {
      id: 4,
      name: 'Novak Djokovic',
      email: 'novak.djokovic@tennis.com',
      status: 'Eliminé',
      level: 8,
    },
    {
      id: 5,
      name: 'Maria Sharapova',
      email: 'maria.sharapova@tennis.com',
      status: 'En lice',
      level: 7,
    },
    {
      id: 6,
      name: 'Andy Murray',
      email: 'andy.murray@tennis.com',
      status: 'Eliminé',
      level: 7,
    }
  ];

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'en lice': return 'badge-active'; 
      case 'eliminé': return 'badge-removed';
      default: return 'badge-inactive';
    }
  }
}
