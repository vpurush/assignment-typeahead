import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import { generateProductList } from '../mock-data/product-list-generator';
import { masterData } from '../mock-data/master-data';


@Injectable()
export class ProductService{

    getProducts(productName: string): Observable<string[]>{
        return new Observable((observer) => {
            let output = masterData.products.filter((p:string) => {
                return p.toLowerCase().indexOf(productName) != -1;
            });            
            observer.next(output);
        });
    }
    
    getCompany(productName: string, companyName: string): Observable<string[]>{
        return new Observable((observer) => {
            let fullList: string[] = [], filteredList: string[] = [];
            if(productName && productName.length){
                fullList = masterData.company[productName];
            }else{
                fullList = [];
                Object.keys(masterData.company).forEach((k: string) => {
                    Array.prototype.push.apply(fullList, masterData.company[k]);
                })
            }
            let output = fullList.filter(c => {
                return c.toLowerCase().indexOf(companyName) != -1;
            });            
            observer.next(output);
        });
    }

    getCompaniesIgnoringProductName(companyName: string): Observable<string[]>{
        return new Observable((observer) => {
            let fullList: string[] = [];
            Object.keys(masterData.company).forEach((k: string) => {
                Array.prototype.push.apply(fullList, masterData.company[k]);
            });
            let output = fullList.filter(c => {
                return c.toLowerCase().indexOf(companyName.toLowerCase()) != -1;
            }).reduce((prevValue, c, i, arr) : any[] => {
                if(prevValue.indexOf(c) == -1){
                    prevValue.push(c);
                }
                return prevValue;
            }, []);            
            observer.next(output);
        });
    }

    getColors(colorName: string): Observable<string[]>{
        return new Observable((observer) => {
            let output = masterData.colors.filter( (c: string) => {
                return c.toLowerCase().indexOf(colorName) != -1;
            });            
            observer.next(output);
        });
    }

    getProductList(productName: string, companyName: string, priceRange: string, color: string, noOfItemsAlreadyLoaded: Number = 0 ): Observable<Array<any>>{
        let result : Array<any> = generateProductList(productName, companyName, priceRange,  color, noOfItemsAlreadyLoaded);
        // console.log("generateProductList", result);
        return Observable.of(result);
    }
}
