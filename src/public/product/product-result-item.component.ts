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
                this.showMe();
                this.scrolledIntoView.emit();
            }else{
                this.hideMe();
            }
        }, 250);
    }

    debouceTimer:any = null;
    ngAfterViewInit(){
        document.addEventListener('scroll', this.scrollHandler.bind(this));
    }

    hidden: boolean = false;
    height: Number = null;
    width: Number = null;
    hideMe(){
        if(!this.hidden){
            this.hidden = true;

            // There is some performance issue with the following code, hence i'm hard coding
            // let padding = parseInt(getComputedStyle(this.elm.nativeElement).padding);
            let padding = 16; //padding is 16px for 100% zoom on desktop
            let border = 2;

            this.height = this.elm.nativeElement.offsetHeight - (2*padding) - border;
            this.width = this.elm.nativeElement.offsetWidth - (2*padding) - border;

            console.log("height width", this.height, this.width);
        }
    }

    showMe(){
        this.hidden = false;
        this.height = null;
        this.width = null;
    }
}