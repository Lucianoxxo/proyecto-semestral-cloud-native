import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <main class="container">
      <h1>Gestión Urban-Kicks</h1>
      <div class="grid">
        <article class="card"><h3>Productos</h3><p>Administración de catálogo y stock.</p></article>
        <article class="card"><h3>Pedidos</h3><p>Revisión y actualización de estados.</p></article>
        <article class="card"><h3>Reportes</h3><p>Indicadores de ventas y operación.</p></article>
        <article class="card"><h3>Auditoría</h3><p>Consulta de acciones registradas.</p></article>
      </div>
    </main>`
})
export class AdminComponent {}