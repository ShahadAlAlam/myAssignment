import {Component, inject} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Product} from '../products/product';
import {ProductService} from '../services/product-service/product.service';
import {ProductDetailsComponent} from '../product-details/product-details.component';

@Component({
  selector: 'app-products-home',
  standalone: true,
  imports: [
    ProductDetailsComponent,
    NgForOf
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-product-details *ngFor="let product of filteredProductList"
                           [product]="product"></app-product-details>
    </section>
  `,
  styleUrl: './products-home.component.scss'
})
export class ProductsHomeComponent {
  productList: Product[] = [];
  productService: ProductService = inject(ProductService);
  filteredProductList: Product[] = []

  constructor() {
    this.getAllProductList();
  }

  async getAllProductList() {
    await this.productService.getAllProducts().then((productList: Product[]) => {
      this.productList = productList;
    });
    console.log(this.productList)
    this.filteredProductList = this.productList;
    console.log("filterProductList",this.filteredProductList);
  }

  filterResults(text: String) {
    if (!text) {
      this.filteredProductList = this.productList;
    } else {
      this.filteredProductList = this.productList
        .filter(Product => Product?.title.toLowerCase().includes(text.toLowerCase()));
    }
  }

}
