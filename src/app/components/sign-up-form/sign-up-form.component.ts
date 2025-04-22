import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { TennisLevelService, TennisLevel } from '../../services/tennis-level.service';

@Component({
  selector: 'app-sign-up-form',
  imports: [CommonModule, RouterModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  standalone: true,
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent implements OnInit {

  name: string = '';
  surname: string = '';
  email: string = '';
  level: number = 0; 
  
  levels: TennisLevel[] = [];
  isLoading = true;

  constructor(private tennisLevelService: TennisLevelService) {}

  ngOnInit(): void {
    this.loadTennisLevels();
  }

  private loadTennisLevels(): void {
    this.isLoading = true;
    this.tennisLevelService.getLevels().subscribe({
      next: (data) => {
        this.levels = data.levels;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des niveaux:', err);
        this.isLoading = false;
      }
    });
  }

  onSubmit() {
    console.log('Inscription réussie !', {
      name: this.name,
      surname: this.surname,
      email: this.email,
      level: this.level,
    });
  }
}
