import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit{

  buttonDisabled = true;

  imgPath!:string;

  isActive = false;


  cssStringVar: string= 'red size20';

  products!: any[];

  ngOnInit(): void {
    this.products = [{
      description:'TV',
      price:10000,
      stock:10
    },
    {
      description:'TV',
      price:10000,
      stock:10
    },
    {
      description:'TV',
      price:10000,
      stock:10
    },
    {
      description:'TV',
      price:10000,
      stock:0
    }  
  ];

  }

  isProductInStock(product: any): boolean {
    return product.stock > 0;
  }

  hasError(){
    return true;
  }

}
