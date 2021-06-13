import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id;
  oneproduct :any;
  constructor(public _ActivatedRoute:ActivatedRoute,public cartService:CartService) {
   
    this.id =this._ActivatedRoute.snapshot.paramMap.get("id");
    this.cartService.getAllData().subscribe((data) =>
    {
      this.oneproduct=data[this.id];
      console.log(this.oneproduct);
    });

   }

  ngOnInit(): void {
  }

}
