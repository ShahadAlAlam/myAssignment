// src/app/top-menu/top-menu.component.ts
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {AuthService} from '../../services/auth-service/auth-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="top-menu">
      <ul>
        <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
        <li><a routerLink="/details/1" routerLinkActive="active">Details</a></li>
        <li *ngIf="authService.isLoggedIn()">
          <button (click)="logout()">Logout</button>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
