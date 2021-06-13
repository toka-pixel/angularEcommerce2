import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product';

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http: HttpClient
    ) { }


  items =[];
 
  
  cartTotal:number=0;
  count:number=0;


  addToCart(product) {

    // for(let i in this.items){
    //   if(this.items[i].id == product.id){
    //       continue;
    //   }
    //   else{
      
      this.items.push(new Product(
       product.id,
       product.title,
       product.price,
       product.category,
       product.description,
       product.image,
       product.quantity
       ));
      
       
       
       

    //   }
    // }
    


  }


  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.cartTotal=0;
    return this.items;
  }


  getAllData():Observable<any> {

  return this.http.get('https://fakestoreapi.com/products');



  }

  removeFromCart(index,product) {
   
     this.items.splice(index, 1);
    
     
    
 
   
    // this.items.splice(this.items.indexOf(product.id), 1);

     // this.addedBook.splice(this.addedBook.indexOf(this.product), 1);
  }

  removeDirect(index,product){
   
    this.count-=product.quantity;
    this.cartTotal-=product.quantity*product.price;

    this.items.splice(index, 1);
    
  }






}
