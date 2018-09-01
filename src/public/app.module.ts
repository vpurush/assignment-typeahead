import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product/product-list.component';
import {ProductSearchComponent} from './product/product-search.component';
import {ProductResultComponent} from './product/product-result.component';
import {ProductResultItemComponent} from './product/product-result-item.component';
import {TypeaheadComponent} from './product/typeahead.component';
import {RangeComponent} from './product/range.component';
import { ProductService } from "./product/product.service";

@NgModule({
    declarations:[
        AppComponent,
        ProductListComponent,
        TypeaheadComponent,
        RangeComponent,
        ProductSearchComponent,
        ProductResultComponent,
        ProductResultItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers:[
        ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule{

}