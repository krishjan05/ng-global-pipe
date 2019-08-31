import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productList: Product[] = new Array<Product>();

  constructor() { }

  ngOnInit() {
    this.productList = [
      { name: 'Computer' },
      { name: 'Laptop' },
    ] as Array<Product>;
  }

}
