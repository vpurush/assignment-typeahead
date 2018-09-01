import {Component, Input, ElementRef, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';
import './product-result-item.component.scss';
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

@Component({
    selector: 'product-result-item',
    templateUrl: './product-result-item.component.html',
    // styleUrls: ['product-list.component.scss']
})
export class ProductResultItemComponent implements AfterViewInit{
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

    @ViewChild('elm')
    elm: ElementRef;

    @Output()
    scrolledIntoView: EventEmitter<any> = new EventEmitter<any>();

    private isInViewport = (el: any) => {
        var r, html;
        html = document.documentElement;
        r = el.getBoundingClientRect();
    
        return ( !!r 
            && r.bottom >= 0 
            && r.right >= 0 
            && r.top <= html.clientHeight 
            && r.left <= html.clientWidth 
        );
    
    }

    scrollHandler(){
        if(this.debouceTimer){
            clearTimeout(this.debouceTimer);
            this.debouceTimer = null;
        }
        this.debouceTimer = setTimeout(() => {
            let isInView = this.isInViewport(this.elm.nativeElement);
            // console.log("isInView", isInView);
            if(isInView){
                this.scrolledIntoView.emit();
            }else{

            }
        }, 500);
    }

    debouceTimer:any = null;
    ngAfterViewInit(){

        document.addEventListener('scroll', this.scrollHandler.bind(this));
    }
}