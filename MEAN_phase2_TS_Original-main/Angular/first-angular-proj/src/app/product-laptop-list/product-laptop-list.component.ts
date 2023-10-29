import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-laptop-list',
  templateUrl: './product-laptop-list.component.html',
  styleUrls: ['./product-laptop-list.component.css']
})
export class ProductLaptopListComponent implements OnInit{
sub:any;
category:any;
   constructor(private Activatedroute:ActivatedRoute,
   private router:Router){
   }
  ngOnInit(): void {
    this.sub = this.Activatedroute.queryParams
       .subscribe(params => {
        console.log(params);
             this.category = params?.['category'];     
});
  }

}
