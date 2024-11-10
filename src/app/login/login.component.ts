import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form (ngSubmit)="onLogin()">
        <input [(ngModel)]="username" name="username" placeholder="Username" required />
        <input [(ngModel)]="password" type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  `,
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password).then((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['/product']);
      } else {
        alert('Invalid login credentials');
      }
    });
  }
}
