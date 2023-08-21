import { Component } from '@angular/core';
import { ShopService } from './ShopService/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  constructor(private shopservice:ShopService){}
  products : any;

//   {
//     id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// },
    
  ngOnInit(){
    this.shopservice.getAllProducts().subscribe((data : any)=>{
       this.products = data;
       console.log("type ",typeof data);       
       console.log("inside init ",this.products);       
    })
    // console.log("log 1");
    
    // console.log("inside shop product array",this.products);
    
  }

  
  
  

}
