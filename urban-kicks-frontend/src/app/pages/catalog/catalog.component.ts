import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product { id: number; name: string; brand: string; size: number; price: number; stock: number; }

@Component({
  standalone: true,
  template: `
    <main class="container">
      <h1>Catálogo</h1>
      <div class="grid">
        @for (p of products; track p.id) {
          <article class="card">
            <h3>{{p.name}}</h3><p>{{p.brand}} · talla {{p.size}}</p>
            <p class="price">$ {{p.price}}</p>
            <p class="muted">Stock: {{p.stock}}</p>
          </article>
        }
      </div>
      @if (!products.length) { <p class="muted">No hay productos cargados todavía.</p> }
    </main>`
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() { this.http.get<Product[]>('/api/catalog/products').subscribe({ next: x => this.products = x, error: () => {} }); }
}