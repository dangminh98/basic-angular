import { Component, OnInit, Input } from '@angular/core';
import {ProductType} from '../ctv/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  @Input() products: ProductType;

  ngOnInit() {
  }

}
