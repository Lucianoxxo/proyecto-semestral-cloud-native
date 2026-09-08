import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="container">
      <section class="hero card">
        <h1>Urban-Kicks</h1>
        <a class="btn" routerLink="/catalog">Ver zapatillas</a>
      </section>
      <section class="grid" style="margin-top:18px">
        <article class="card"><h3>Catálogo</h3><p class="muted">Productos y stock disponibles.</p></article>
        <article class="card"><h3>Pedidos</h3><p class="muted">Consulta el estado de tus compras.</p></article>
        <article class="card"><h3>Gestión</h3><p class="muted">Funciones para Admin y Operator.</p></article>
      </section>
    </main>`
})
export class HomeComponent {}
