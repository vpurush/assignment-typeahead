import {Component, Input, Output, EventEmitter} from '@angular/core';
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

    @Output()
    lastItemScrolledIntoView: EventEmitter<any> = new EventEmitter<any>();


    childScrolledIntoView(idx: any){
        if(idx == this.data.length - 1){
            // console.log("last item");
            this.lastItemScrolledIntoView.emit();
        }
    }
}