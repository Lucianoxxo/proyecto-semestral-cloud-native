import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'uk-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <header class="top">
      <div class="nav">
        <a routerLink="/" class="brand">URBAN-KICKS</a>
        <nav>
          <a routerLink="/catalog">Zapatillas</a>
          <a routerLink="/orders">Mis pedidos</a>
          <a routerLink="/admin">Gestión</a>
        </nav>
        <div>
          @if (auth.isLoggedIn()) {
            <button class="btn secondary" (click)="auth.logout()">Salir</button>
          } @else {
            <button class="btn" (click)="auth.login()">Ingresar</button>
          }
        </div>
      </div>
    </header>
    <router-outlet />
  `,
  styles: [`.top{background:#111;color:#fff}.nav{max-width:1180px;margin:auto;padding:15px 24px;display:flex;align-items:center;gap:30px}.brand{font-weight:800;color:#fff;text-decoration:none}.nav nav{display:flex;gap:20px;flex:1}.nav nav a{color:#fff;text-decoration:none}`]
})
export class AppComponent {
  constructor(public auth: AuthService) {}
}