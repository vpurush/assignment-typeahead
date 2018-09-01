import {Component} from '@angular/core';
import './product-list.component.scss';
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    // styleUrls: ['product-list.component.scss']
})
export class ProductListComponent {

    constructor(private productService: ProductService){
        
    }

    searchResult: Array<any>;

    search(searchCriteria: any){
        this.productService.getProductList(searchCriteria.product, searchCriteria.company, searchCriteria.price, searchCriteria.color).subscribe((pList) => {
            this.searchResult = pList;
        })
    }
}