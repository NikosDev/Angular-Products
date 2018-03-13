import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductsService {

  constructor() { } 

  filters: object = {};

  dataArray:any[] = [];

  products = [
    { brand: "apple", color: "gold", name: 'iphone7', ram: 4, cpu: 2, os: 'ios' },
    { brand: "samsung", color: "gold", name: 'galaxya5', ram: 6, cpu: 4, os: 'android' },
    { brand: "xiaomi", color: "red", name: 'note5', ram: 6, cpu: 2, os: 'android' },
    { brand: "huawei", color: "blue", name: 'p10', ram: 8, cpu: 8, os: 'android' },
    { brand: "xiaomi", color: "red", name: 'note4', ram: 16, cpu: 4, os: 'android' },
    { brand: "asus", color: "silver", name: 'zenfone3', ram: 8, cpu: 8, os: 'android' },
    { brand: "samsung", color: "black", name: 'galaxys8', ram: 16, cpu: 4, os: 'android' },
    { brand: "asus", color: "silver", name: 'zenfone4', ram: 4, cpu: 8, os: 'android' },
    { brand: "huawei", color: "silver", name: 'p9', ram: 8, cpu: 2, os: 'android' },
    { brand: "huawei", color: "pink", name: 'honor8', ram: 8, cpu: 4, os: 'android' },
    { brand: "xiaomi", color: "gold", name: 'mix2', ram: 4, cpu: 8, os: 'android' },
    { brand: "samsung", color: "pink", name: 'galaxyj5', ram: 16, cpu: 8, os: 'android' },
    { brand: "samsung", color: "black", name: 'galaxya8', ram: 8, cpu: 2, os: 'android' },
    { brand: "apple", color: "white", name: 'iphone8', ram: 6, cpu: 4, os: 'ios' },
    { brand: "apple", color: "white", name: 'iphonex', ram: 4, cpu: 8, os: 'ios' },
    { brand: "huawei", color: "black", name: 'honor10', ram: 4, cpu: 2, os: 'android' },
    { brand: "samsung", color: "red", name: 'note8', ram: 16, cpu: 8, os: 'android' },
    { brand: "apple", color: "white", name: 'iphone6', ram: 16, cpu: 8, os: 'ios' }
  ];

  /* filters = {
    brand:['apple'],
    color: ['gold']
  }

  filterProducts(){
    let result = this.products.filter(x =>
      Object.keys(this.filters).every(f => 
      this.filters[f].some( z => z == x[f] )));
    //console.log(result);

  } */

  uniqueBrand(){
    let result = [];
    this.products.filter(function(item){
      var i = result.findIndex(x => x.brand == item.brand);
      if(i <= -1){
            result.push(item);
      }
      return null;
    });
    return result;
  } 

  uniqueRam(){
    let result = [];
    this.products.filter(function(item){
      var i = result.findIndex(x => x.ram == item.ram);
      if(i <= -1){
            result.push(item);
      }
      return null;
    });
    return result;
  } 

  uniqueCpu(){
    let result = [];
    this.products.filter(function(item){
      var i = result.findIndex(x => x.cpu == item.cpu);
      if(i <= -1){
            result.push(item);
      }
      return null;
    });
    return result;
  } 

  uniqueOs(){
    let result = [];
    this.products.filter(function(item){
      var i = result.findIndex(x => x.os == item.os);
      if(i <= -1){
            result.push(item);
      }
      return null;
    });
    return result;
  } 

  sendFilters(value){
    this.filters = value;
    //console.log(this.filters,'this is filters from product service');
    this.showResults();
  }

  removeFilters(keys,val,arr){
    let index = this.filters[keys].indexOf(val);
    this.filters[keys].splice(index, 1);
    if (this.filters[keys].length==0) {
      delete this.filters[keys];
    }
    this.showResults();
    /* console.log('keys:',keys);
    console.log('val:',val);
    console.log('array send:',arr);
    console.log('Service filrers:',this.filters); */
  }

  showResults(){
   let y= this.products.filter(x =>
      Object.keys(this.filters).every(f => 
      this.filters[f].some( z => z == x[f] )));
    console.log(this.filters,'this is results from product service');    
    
    this.changeMessage(y);
    //return this.filters;
  }

  // =========> RXJS POWER <==========

  private messageSource = new BehaviorSubject<any>(this.products);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message:any[]){
    this.messageSource.next(message)
    console.log('RXJS RESULT',this.currentMessage);
  }
}
