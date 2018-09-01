import {Component, Input} from '@angular/core';
import './product-result.component.scss';
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

@Component({
    selector: 'product-result-item',
    templateUrl: './product-result-item.component.html',
    // styleUrls: ['product-list.component.scss']
})
export class ProductResultItemComponent {

    constructor(private productService: ProductService){
        
    }

    @Input()
    product: string;

    @Input()
    company: string;

    @Input()
    price: string;

    @Input()
    color: string;

    @Input()
    imageUrl: string;
}