import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard, roleGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [authGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard, roleGuard], data: { roles: ['admin', 'Operator'] } },
  { path: '**', component: NotFoundComponent }
];