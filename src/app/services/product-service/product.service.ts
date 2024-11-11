import { Injectable } from '@angular/core';
import {HousingLocation} from '../../housing-location';
import {Product} from '../../products/product';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="/api/products";
  protected productList: any;

  constructor() {}

  async getAllProducts() : Promise<any> {
    const data = fetch(this.url);
    const response = await data;
    const finalData = await response.json() ?? [];
    this.productList = finalData.products;
    return this.productList;
    // return this.housingLoscationList;
  }

  async getProductById(id:number):Promise<Product>{
    const data = fetch(`${this.url}/${id}`) ;
    const response = await data;
    console.log('response',response);
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
