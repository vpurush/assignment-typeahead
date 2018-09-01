import { Component, EventEmitter, Output} from '@angular/core';
import './product-search.component.scss';
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

@Component({
    selector: 'product-search',
    templateUrl: './product-search.component.html',
    // styleUrls: ['product-list.component.scss']
})
export class ProductSearchComponent {

    constructor(private productService: ProductService){
        
    }

    selectedProduct:string = null;
    productObservable: Observable<string[]> = Observable.of([]);

    productInputChange(productName: string){
        this.productObservable = this.productService.getProducts(productName);
    }

    productSelect(productName: string){
        this.selectedProduct = productName;
        this.companyObservable = Observable.of([]);
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

    selectedPrice:string;
    priceSelect(price: string){
        this.selectedPrice = price;
    }

    @Output()
    onSearch: EventEmitter<any> = new EventEmitter<any>();

    search(){
        this.onSearch.emit({
            product: this.selectedProduct,
            company: this.selectedCompany,
            color: this.selectedColor,
            price: this.selectedPrice
        });
    }
}