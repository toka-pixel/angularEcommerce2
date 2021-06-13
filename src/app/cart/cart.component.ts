import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormControl ,FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  items;
  totalprice:number=0; 
 
  constructor(private cartService: CartService,  private _router: Router) { }

  
  ngOnInit() {

    this.items = this.cartService.getItems();
    
   
    this.cartService.getItems().map((item) => {
      
      this.totalprice +=  item.price ;
     
    });

  }

  removeDirect(index,item) {
    this.cartService.removeDirect(index,item);

   
    // this.cartService.removeFromCart(product);

    // this.addedBook.splice(this.addedBook.indexOf(this.product), 1);
  }


  profileForm = new FormGroup({
    // name: new FormControl('toka',[Validators.required, Validators.minLength(3)]),
    address: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    phone: new FormControl('',[Validators.required,Validators.pattern('[0-9]{9}')]),
  
  });


  Submitme(){
   
    if (this.profileForm.valid) {
     
        this._router.navigate(['/']);  
  
    }
     
  }
 
     

}
