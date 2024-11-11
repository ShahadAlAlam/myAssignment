// src/app/app-routing.module.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ProductDescriotionComponent } from "./product-descriotion/product-descriotion.component";
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import {ProductsHomeComponent} from './products-home/products-home.component';

const routeConfig: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [authGuard], title: 'Home Page' },
  { path: 'details/:id', component: DetailsComponent, canActivate: [authGuard], title: 'Details' },
  { path: 'product', component: ProductsHomeComponent, canActivate: [authGuard], title: 'Products Page' },
  { path: 'product-descriotion/:id', component: ProductDescriotionComponent, canActivate: [authGuard], title: 'Product Details' },
];

export default routeConfig;
