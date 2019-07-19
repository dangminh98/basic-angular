import { Component, OnInit } from '@angular/core';
import {ProductType} from './products';

@Component({
  selector: 'app-ctv',
  templateUrl: './ctv.component.html',
  styleUrls: ['./ctv.component.css']
})
export class CtvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  productDetail : ProductType;
  showClass = false;
  products : ProductType[] = [
    {
      id : 1,
      name: 'test',
      price : 200,
      image : 'http://localhost/papipu/public/images/products/1562578312_27067863_583751945299723_7942603576390880467_n.jpg',
      desc : 'description1'
    },
    {
      id : 2,
      name: 'test2',
      price : 300,
      image : 'http://localhost/papipu/public/images/products/1562578312_27067863_583751945299723_7942603576390880467_n.jpg',
      desc : 'description1'
    },
    {
      id : 3,
      name: 'test3',
      price : 400,
      image : 'http://localhost/papipu/public/images/products/1562578312_27067863_583751945299723_7942603576390880467_n.jpg',
      desc : 'description1'
    },
    {
      id : 4,
      name: 'test4',
      price : 500,
      image : 'http://localhost/papipu/public/images/products/1562578312_27067863_583751945299723_7942603576390880467_n.jpg',
      desc : 'description1'
    },

  ];

  onClick = (products) => {
    this.showClass = !this.showClass;
    this.productDetail = products;
  };

  onDelete = id => {
    console.log(id);

    this.products = this.products.filter(items => items.id !== id);
  };

  onShowClass = () => {
    return {
      'text-danger' : this.showClass,
      'text-center' : this.showClass,
    }
  }
}
