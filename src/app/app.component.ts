import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {TopMenuComponent} from './menu/top-menu/top-menu.component';
import {AuthService} from './services/auth-service/auth-service.service';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
        <main>
            <header class="brand-name">
                <img class="brand-logo" src="/assets/logo.svg"
                alt="logo" aria-hidden="true">
            </header>
            <app-top-menu *ngIf="authService.isLoggedIn()"></app-top-menu>
            <section class="content">
<!--                <app-home></app-home>-->
              <router-outlet></router-outlet>
            </section>
        </main>`,
  styleUrls: ['./app.component.scss'],
  imports:[CommonModule, LoginComponent, TopMenuComponent, RouterModule]
})
export class AppComponent {
  title = 'Login';
  constructor(public authService: AuthService) {}
}
