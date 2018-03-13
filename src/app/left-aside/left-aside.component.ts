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
  brandArray: any[] = [];
  cpuArray: any[] = [];
  ramArray: any[] = [];
  osArray: any[] = [];
  checkboxName: string;
  obj: object = {};
  message: string;

  

  ngOnInit(){
    this.productsService.currentMessage.subscribe(message => this.message = message);
    this.brandCheckbox = this.productsService.uniqueBrand();
    this.ramCheckbox = this.productsService.uniqueRam();
    this.cpuCheckbox = this.productsService.uniqueCpu();
    this.osCheckbox = this.productsService.uniqueOs();
  }
  newMessage(){
    this.productsService.changeMessage('victory!')
  }
  
  checkboxValues(product,checkboxName, event){
    if ( event.target.checked ) {
      if(checkboxName=='brand') {
        this.brandArray.push(product[checkboxName]);
        this.obj = Object.assign({[checkboxName]: this.brandArray}, this.obj);
        return this.productsService.sendFilters(this.obj);
      }
      if(checkboxName=='cpu') {
        this.cpuArray.push(product[checkboxName]);
        this.obj = Object.assign({[checkboxName]: this.cpuArray}, this.obj);
        return this.productsService.sendFilters(this.obj);
      }
      if(checkboxName=='ram') {
        this.ramArray.push(product[checkboxName]);
        this.obj = Object.assign({[checkboxName]: this.ramArray}, this.obj);
        return this.productsService.sendFilters(this.obj);
      }
      if(checkboxName=='os') {
        this.osArray.push(product[checkboxName]);
        this.obj = Object.assign({[checkboxName]: this.osArray}, this.obj);
        return this.productsService.sendFilters(this.obj);
      }  
    }else{
      if(checkboxName=='brand') {
          return this.productsService.removeFilters(checkboxName, product[checkboxName],this.brandArray);
      }
      else if(checkboxName=='cpu') {
        return this.productsService.removeFilters(checkboxName, product[checkboxName],this.cpuArray);
      }
      else if(checkboxName=='ram') {
        return this.productsService.removeFilters(checkboxName, product[checkboxName],this.ramArray);
      }
      else if(checkboxName=='os') {
        return this.productsService.removeFilters(checkboxName, product[checkboxName],this.osArray);
      }     
    }
    
  }

  
}
