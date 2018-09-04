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

    productInputChange(productName: string): Observable<string[]>{
        this.productObservable = this.productService.getProducts(productName);
        return this.productObservable;
    }

    productSelect(productName: string){
        this.selectedProduct = productName;
    }
    

    selectedCompany:string = null;
    companyObservable: Observable<string[]> = Observable.of([]);
    companyInputReset: boolean = false;
    companyInputChange(companyName: string){
        this.companyObservable = this.productService.getCompaniesIgnoringProductName(companyName);
        return this.companyObservable;
    }

    companySelect(companyName: string){
        this.selectedCompany = companyName;
        this.companyInputReset = false;
    }
    
    
    selectedColor:string = null;
    colorObservable: Observable<string[]> = Observable.of([]);

    colorInputChange(colorName: string){
        this.colorObservable = this.productService.getColors(colorName);
        return this.colorObservable;
    }

    colorSelect(colorName: string){
        this.selectedColor = colorName;
    }

    selectedPrice:string;
    priceSelect(price: string){
        this.selectedPrice = price;
    }

    typeaheadConfig: any = {
        "buy":{
            onChange: this.productInputChange.bind(this),
            onSelect: this.productSelect.bind(this)
        },
        "company":{
            onChange: this.companyInputChange.bind(this),
            onSelect: this.companySelect.bind(this)
        },
        "color":{
            onChange: this.colorInputChange.bind(this),
            onSelect: this.colorSelect.bind(this)
        }
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