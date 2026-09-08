import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  template: `
    <main class="container">
      <h1>Mis pedidos</h1>
      <div class="grid">
        @for (o of orders; track o.id) {
          <article class="card"><h3>Pedido #{{o.id}}</h3><p>Estado: <b>{{o.status}}</b></p><p>Total: $ {{o.total}}</p></article>
        }
      </div>
      @if (!orders.length) { <p class="muted">No tienes pedidos para mostrar.</p> }
    </main>`
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() { this.http.get<any[]>('/api/orders').subscribe({next: x => this.orders = x, error: () => {}}); }
}