import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {Product} from '../product';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
 
 alldata:any[];
 searchtext = '';


  constructor( private route: ActivatedRoute, private cartService: CartService) {

                // this.x1=1
             

                }

  ngOnInit() {
    this.x1=1;
    // this.alldata = this.cartService.getAllData();

    this.cartService.getAllData().subscribe((data)=>{
      this.alldata=data;
      
    });

  }
   prod:Product={
     id : 0,
    title :'',
    description : "",
     price : 0,
    image : "",
    quantity:0,
    category:"kk"
  
   };
   
  
  addToCart(product) {
    // this.cartService.addToCart(product);
    
  
    let exists=false;

    for(let i in this.cartService.getItems()){
      if(this.cartService.getItems()[i].id === product.id){
        this.cartService.getItems()[i].quantity++;
      
        exists=true;

        this.cartService.count++;

        
        window.alert('Your product is increase');
       
        break;
      }
    }
    if(!exists){
      this.prod['id']=product.id;
      this.prod['title']=product.title;
      this.prod['price']=product.price;
      this.prod['category']=product.category;
      this.prod['description']=product.description;
      this.prod['image']=product.image;
      this.prod['quantity']=1;
    
      this.cartService.addToCart(this.prod);
      this.cartService.count++;
      console.log(this.cartService.count);
      window.alert('Your product has been added to the cart!');
        console.log( this.prod);
    }
   
    this.cartService.cartTotal+= product.price ;
  
  }


  x1:number=1;
  afterclick:number;


  plus(value :any,i){
 
    const initialvalue = 0; 
    if (value != null) { 
        
        const afterclick = value + 1; 
        // window.alert(i);
        return (this.alldata[i].x1 = afterclick); 
    } 
    else { 
        // return (this.alldata.indexOf(i).x1 = initialvalue + 1); 
    } 

    // return this.x1++;
  }
 
  minus(id,index){
  
    const initialvalue = 1; 
    
    for(let i in this.cartService.getItems()){
      if(this.cartService.getItems()[i].id == id){
        if( this.cartService.getItems()[i].quantity >= 1){

          this.cartService.getItems()[i].quantity--;
          this.cartService.count--;
          this.cartService.cartTotal-=this.cartService.getItems()[i].price;
          
          console.log( this.cartService.getItems()[i].quantity);

          window.alert('Your product is derease');
        }
      else{

        this.cartService.removeFromCart(id-1, this.cartService.getItems()[i]);
         
     
        }
       
       
      }
    }
 
    // if (value > 0) { 
    //     const afterclick = value - 1; 
     
    //     return (this.alldata[i].x1 = afterclick); 
    // } 
    // else { 
    //     return (this.alldata[i].x1 = initialvalue - 1); 
    // } 
    
    // this.x1-=1
    
  }


  display(index){
    var element=document.getElementsByClassName('addToCart');
    element[index].classList.add('hide');
  }

// searchtext:string;
price:any;
e1:any;
search(){
  this.price=document.getElementById("searchtext");

  // this.alldata = this.cartService.getAllData();
  if(this.price.value != ''){
  this.price = this.price.value;
   
  //  this.alldata=this.alldata.subscribe(lists=>{
  //     lists.filter( el =>{
  //       el.price === this.price;
     
  //     });
  //     });
    
  this.alldata=this.cartService.getItems().map((item) => {
        item.price === this.price;
      
        console.log(item.price);
      });
 

  }

    

  

  
 
}

}


