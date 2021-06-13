import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items=[];
  cartTotal:number;
  count:number;
  
  constructor(private cartService: CartService) { 
//     this.cart=  this.total()
// console.log('cart',this.cart)



  }
cart:any;

ngOnInit(){

    this.items = this.cartService.getItems();
    
    


    // this.cartService.getItems()(item => {
   
    //   this.cartTotal += item.price;
      
    // });

    // for(let i=0 ;i< this.items.length;i++){
    //   this.cartTotal += this.items[i].price;
    
    //   console.log(this.cartTotal);
    //   return this.cartTotal;
    // }
 
  }

countNumber(){
return this.cartService.count;
}

total(){
 return this.cartService.cartTotal.toFixed(0)  ;
  
}

// countNumber(){
//   return this.cartService.countNumber();
// }



  cart_img(){
  

    var element = document.getElementById("content-cart");

    if(element.style.display=='none'){
      element.style.display='block';
    }
    else{
      element.style.display='none';
    }
  // element.classList.toggle("mystyle");
  }



}
