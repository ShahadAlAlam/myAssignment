import { Injectable } from '@angular/core';
import {HousingLocation} from '../../housing-location';
import {Product} from '../../products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="https://dummyjson.com/products";
  protected productList: Product[] =[];

  constructor() {}

  async getAllProducts() : Promise<Product[]> {
    const data = fetch(this.url);
    const response = await data;
    this.productList =await response.json() ?? [];
    console.log("productList",this.productList);
    return this.productList;
    // return this.housingLoscationList;
  }

  async getProductById(id:number):Promise<HousingLocation>{
    const data = fetch(`${this.url}/${id}`) ;
    const response = await data;
    return await response.json() ?? {};

    // return this.housingLoscationList.find(housingLocation => housingLocation.id===id);
  }

  // submitApplication(firstName: String, lastName: String, email: String, housingLocationId: number){
  //   console.log(housingLocationId)
  //   this.housingLoscationList.forEach(housingLocation=>{
  //     if(housingLocation.id==housingLocationId){
  //       console.log(housingLocation.id)
  //       housingLocation.availableUnits -=1;
  //       console.log(housingLocation.availableUnits)
  //     }
  //   })
  // }
}
