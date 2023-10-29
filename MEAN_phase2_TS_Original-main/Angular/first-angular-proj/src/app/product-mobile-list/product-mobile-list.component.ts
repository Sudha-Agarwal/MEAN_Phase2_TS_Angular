import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-mobile-list',
  templateUrl: './product-mobile-list.component.html',
  styleUrls: ['./product-mobile-list.component.css']
})
export class ProductMobileListComponent implements OnInit{
  products: Product[];
  productForm: FormGroup;
  showForm: boolean = false;
  lastId:number;

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.productService.getProducts("Mobile")
      .subscribe(products => {this.products = products;
      this.lastId = this.products[this.products.length-1].id});
      this.createForm();   
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id);
      this.products = this.products.filter(p => p.id !== id);
    }
  }
  createForm(){
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)     
    });
  }

  onSubmit(){

    const product:Product = {
      id:this.lastId + 1,
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      type:'Mobile'    
    };  
    this.productService.addProduct(product);
    this.showForm = false;
    this.ngOnInit();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

}
