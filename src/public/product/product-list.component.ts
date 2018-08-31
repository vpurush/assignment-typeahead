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

    selectedProduct:string = null;
    productObservable: Observable<string[]> = Observable.of([]);

    productInputChange(productName: string){
        this.productObservable = this.productService.getProducts(productName);
    }

    productSelect(productName: string){
        this.selectedProduct = productName;
    }
    

    selectedCompany:string = null;
    companyObservable: Observable<string[]> = Observable.of([]);

    companyInputChange(companyName: string){
        this.companyObservable = this.productService.getCompany(this.selectedProduct, companyName);
    }

    companySelect(companyName: string){
        this.selectedCompany = companyName;
    }
    
    
    selectedColor:string = null;
    colorObservable: Observable<string[]> = Observable.of([]);

    colorInputChange(colorName: string){
        this.colorObservable = this.productService.getColors(colorName);
    }

    colorSelect(colorName: string){
        this.selectedCompany = colorName;
    }
}