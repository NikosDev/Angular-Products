import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.css']
})
export class LeftAsideComponent implements OnInit {
  constructor(private productsService: ProductsService) { }
  brandCheckbox: any[];
  ramCheckbox: any[];
  cpuCheckbox: any[];
  osCheckbox: any[];
  

  ngOnInit(){
    this.brandCheckbox = this.productsService.uniqueBrand();
    this.ramCheckbox = this.productsService.uniqueRam();
    this.cpuCheckbox = this.productsService.uniqueCpu();
    this.osCheckbox = this.productsService.uniqueOs();
  }
  
}
