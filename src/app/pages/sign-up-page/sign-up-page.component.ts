import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SignUpFormComponent } from '../../components/sign-up-form/sign-up-form.component';
import { TennisLevelService, TennisLevelData } from '../../services/tennis-level.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-page',
  imports: [NavbarComponent, FooterComponent, CommonModule, RouterModule, SignUpFormComponent, HttpClientModule],
  standalone: true,
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent implements OnInit {
  tennisLevelData: TennisLevelData | null = null;
  isLoading = true;
  error = false;

  constructor(private tennisLevelService: TennisLevelService) {}

  ngOnInit(): void {
    this.loadTennisLevels();
  }

  private loadTennisLevels(): void {
    this.isLoading = true;
    this.tennisLevelService.getLevels().subscribe({
      next: (data) => {
        this.tennisLevelData = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des niveaux:', err);
        this.error = true;
        this.isLoading = false;
      }
    });
  }
}
