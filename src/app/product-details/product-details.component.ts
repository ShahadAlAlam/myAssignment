import { Component, Input } from '@angular/core';
import { Product } from '../products/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="product?.thumbnail" alt="Exterior photo of {{product?.title}}">
      <h2 class="listing-heading">{{product?.title}}</h2>
      <p class="listing-locations">{{product?.brand}}</p>
      <!-- Optionally, you could add a link to product details here -->
       <a [routerLink]="['/product-descriotion', product?.id]">Learn More</a> 
    </section>
  `,
  styleUrls: ['./product-details.component.scss'] // Fixed typo here
})
export class ProductDetailsComponent {
  @Input() product!: Product;
}
