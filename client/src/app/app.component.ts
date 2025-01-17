import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {SectionLinkComponent} from './components/section-link/section-link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FooterComponent, 
    NavbarComponent, 
    HeaderComponent, 
    SectionLinkComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
