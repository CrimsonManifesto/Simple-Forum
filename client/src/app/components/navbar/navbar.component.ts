import { Component } from '@angular/core';

import { NgIf } from '@angular/common';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}
