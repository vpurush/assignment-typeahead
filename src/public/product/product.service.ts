import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import { generateProductList } from '../mock-data/product-list-generator';


let mockData = {
    products: [
        'Electronics',
        'Shoes',
        'Handbags',
        'Kitchen',
        'Fashion',
        'Grooming'
    ],
    company: {
        'Electronics': [
            'Nikon',
            'Samsung',
            'Sony',
            'LG',
            'IFB',
            'Panasonic'
        ],
        'Shoes':[
            'Reebok',
            'Nike',
            'Puma'
        ],
        'Handbags': [
            'Gucci',
            'Capreese',
            'Guess',
            'Fossil'
        ],
        'Kitchen': [
            'Godrej',
            'Samsung',
            'LG',
            'IFB',
            'Panasonic'
        ],
        'Fashion': [
            'Gucci Fashion',
            'Capreese',
            'Guess',
            'Fossil'
        ],
        'Grooming': [
            'Phillips',
            'Panasonic',
            'Casio'
        ]
    },
    colors: [
        'white',
        'blue',
        'green',
        'yellow',
        'orange'
    ]
}

@Injectable()
export class ProductService{

    getProducts(productName: string): Observable<string[]>{
        return new Observable((observer) => {
            let output = mockData.products.filter(p => {
                return p.toLowerCase().indexOf(productName) != -1;
            });            
            observer.next(output);
        });
    }
    
    getCompany(productName: string, companyName: string): Observable<string[]>{
        return new Observable((observer) => {
            let fullList: string[] = [], filteredList: string[] = [];
            if(productName && productName.length){
                fullList = mockData.company[productName];
            }else{
                fullList = [];
                Object.keys(mockData.company).forEach(k => {
                    Array.prototype.push.apply(fullList, mockData.company[k]);
                })
            }
            let output = fullList.filter(c => {
                return c.toLowerCase().indexOf(companyName) != -1;
            });            
            observer.next(output);
        });
    }

    getColors(colorName: string): Observable<string[]>{
        return new Observable((observer) => {
            let output = mockData.colors.filter(c => {
                return c.toLowerCase().indexOf(colorName) != -1;
            });            
            observer.next(output);
        });
    }

    getProductList(productName: string, companyName: string, priceRange: string, color: string ): Observable<Array<any>>{
        let result : Array<any> = generateProductList(productName, companyName, priceRange,  color);
        // console.log("generateProductList", result);
        return Observable.of(result);
    }
}
