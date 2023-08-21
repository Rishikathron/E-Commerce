import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent {
  @Input() productItem : any ;
  ngOnInit(){
    console.log("logging "+this.productItem);
  }
  
  
//   {
//     id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// },
}
