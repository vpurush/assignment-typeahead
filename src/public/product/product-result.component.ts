import {Component, Input} from '@angular/core';
import './product-result.component.scss';
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

@Component({
    selector: 'product-result',
    templateUrl: './product-result.component.html',
    // styleUrls: ['product-list.component.scss']
})
export class ProductResultComponent {

    constructor(private productService: ProductService){
        
    }

    @Input()
    data: Array<any>;
}