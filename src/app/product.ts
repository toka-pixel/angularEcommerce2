export class Product {

  id: number;
 title: string;
  description: string;
  price: number;
  image: string;
  quantity:number;
  category:string

  constructor(id=0, title, price=0,category='',description='',  image='', quantity=0 ) {
    this.id = id
    this.title = title
    this.price = price
    this.category=category
    this.description = description
   
    this.image = image
    this.quantity=quantity
    

 
  }


}
