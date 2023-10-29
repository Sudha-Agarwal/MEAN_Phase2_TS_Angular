import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1' ,type:"Mobile"},
    { id: 2, name: 'Product 2', description: 'Description 2' ,type:"Mobile"},
    { id: 3, name: 'Product 3', description: 'Description 3' ,type:"Laptop"},
  ];

  getProducts(type:string): Observable<Product[]> {
    const product = this.products.filter(p => p.type === type);
    return of(product);
   // return of(this.products);
  }

  getProduct(id: number): Observable<Product> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }

  addProduct(product: Product): void {
    // add new product to the list
    this.products.push(product);
  }

  updateProduct(product: Product): void {
    // find the product in the list and update it
    const index = this.products.findIndex(p => p.id === product.id);
    this.products[index] = product;
  }

  deleteProduct(id: number): void {
    // remove the product from the list
    const index = this.products.findIndex(p => p.id === id);
    this.products.splice(index, 1);
  }
}
