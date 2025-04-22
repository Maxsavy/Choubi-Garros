import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { BracketComponent } from '../../components/bracket/bracket.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-bracket-page',
  imports: [NavbarComponent, BracketComponent, FooterComponent],
  standalone: true,
  templateUrl: './bracket-page.component.html',
  styleUrl: './bracket-page.component.css'
})
export class BracketPageComponent {

}
