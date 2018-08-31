import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product/product-list.component';
import {TypeaheadComponent} from './product/typeahead.component';
import { ProductService } from "./product/product.service";

@NgModule({
    declarations:[
        AppComponent,
        ProductListComponent,
        TypeaheadComponent
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