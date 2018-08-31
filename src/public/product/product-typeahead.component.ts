import {Component} from '@angular/core';
import './product-list.component.scss';
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

@Component({
    selector: 'product-list',
    templateUrl: './product-typeahead.component.html',
    // styleUrls: ['product-list.component.scss']
})
export class ProductTypeaheadComponent {

    constructor(private productService: ProductService){
        
    }

    productObservable: Observable<string[]> = Observable.of([]);

    productInputChange(productName: string){
        this.productObservable = this.productService.getProducts(productName);
    }

    productSelect(){
        console.log("buy select");
    }
}