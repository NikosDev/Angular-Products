import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-right-aside',
  templateUrl: './right-aside.component.html',
  styleUrls: ['./right-aside.component.css']
})
export class RightAsideComponent implements OnInit {
  constructor(private productsService: ProductsService) { }
  smartphones: any[];

  ngOnInit() {
    this.smartphones =  this.productsService.dataArray;
    console.log(this.smartphones,'gg wp');
  }

  

}
