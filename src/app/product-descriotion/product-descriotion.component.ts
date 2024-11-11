import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../services/product-service/product.service";
import { Product } from "../products/product";

@Component({
  selector: 'app-product-descriotion',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <article>
      <img class="listing-photo" [src]="product?.thumbnail"
           alt="Exterior photo of {{product?.title}}">
      <section class="listing-description">
        <h2 class="listing-heading">{{ product?.title }}</h2>
        <p class="listing-locations">{{ product?.brand }}, {{ product?.description }}</p>
      </section>
    </article>
  `,
  styleUrl: './product-descriotion.component.scss'
})
export class ProductDescriotionComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productId = 0;
  productService: ProductService = inject(ProductService);
  product: Product | undefined;

  constructor() {

    this.productId = Number(this.route.snapshot.params['id']);
    this.getProductById(this.productId);
  }

  getProductById(id: number){
    this.productService.getProductById(this.productId).then(product =>{
      this.product = product;
    });
  }

}
