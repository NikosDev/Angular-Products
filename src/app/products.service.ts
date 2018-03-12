import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }

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

  filters = {
    brand:['apple'],
    color: ['gold']
  }

  filterProducts(){
    let result = this.products.filter(x =>
      Object.keys(this.filters).every(f => 
      this.filters[f].some( z => z == x[f] )));
    console.log(result);

  }

  uniqueBrand(){
    let result = Array.from(new Set(this.products.map(item => item.brand)));
    return result;
  } 

  uniqueRam(){
    let result = Array.from(new Set(this.products.map(item => item.ram)));
    return result;
  } 

  uniqueCpu(){
    let result = Array.from(new Set(this.products.map(item => item.cpu)));
    return result;
  } 

  uniqueOs(){
    let result = Array.from(new Set(this.products.map(item => item.os)));
    return result;
  } 
}
