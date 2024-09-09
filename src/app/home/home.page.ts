import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(private detail : NavController) {}
 gotodetail(i:any){
  this.detail.navigateForward('/detail',{state:{i}} );
 }
  items=[
    {
      id:1,
      name:"iPhone 15 Pro Max",
      price:39900,
      detail:"The is a iPhone 15 Pro Max by Apple",
      imagesURL:"assets/image/product/i15promax 1.png"
    },
    {
      id:2,
      name:"Samsung S 24 Ultar",
      price:34900,
      detail:"The is a Samsung S 24 Ultar by Samsung",
      imagesURL:"assets/image/product/s24u 1.png"
    },
    {
      id:3,
      name:"Samsung A54 5G",
      price:19900,
      detail:"The is a Samsung A54 5G by Samsung",
      imagesURL:"assets/image/product/A54 1.png",
    },
    {
      id:4,
      name:"Xiaomi 14T Pro ",
      price:19900,
      detail:"The is a Xiaomi 14T Pro by Xiaomi",
      imagesURL:"assets/image/product/mi14tpro 1.png"
    },
  ]
}