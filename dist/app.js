!function(e){function t(t){for(var o,i,a=t[0],s=t[1],l=t[2],p=0,f=[];p<a.length;p++)i=a[p],r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(u&&u(t);f.length;)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},c=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;c.push([277,1]),n()}({182:function(e,t){function n(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=182},276:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),c=n(124),i={products:["Electronics","Shoes","Handbags","Kitchen","Fashion","Grooming"],company:{Electronics:["Nikon","Samsung","Sony","LG","IFB","Panasonic"],Shoes:["Reebok","Nike","Puma"],Handbags:["Gucci","Capreese","Guess","Fossil"],Kitchen:["Godrej","Samsung","LG","IFB","Panasonic"],Fashion:["Gucci Fashion","Capreese","Guess","Fossil"],Grooming:["Phillips","Panasonic","Casio"]},colors:["white","blue","green","yellow","orange"]},a=function(){function e(){}return e.prototype.getProducts=function(e){return new c.Observable(function(t){var n=i.products.filter(function(t){return-1!=t.toLowerCase().indexOf(e)});t.next(n)})},e.prototype.getCompany=function(e,t){return new c.Observable(function(n){var o=[];e&&e.length?o=i.company[e]:(o=[],Object.keys(i.company).forEach(function(e){Array.prototype.push.apply(o,i.company[e])}));var r=o.filter(function(e){return-1!=e.toLowerCase().indexOf(t)});n.next(r)})},e.prototype.getColors=function(e){return new c.Observable(function(t){var n=i.colors.filter(function(t){return-1!=t.toLowerCase().indexOf(e)});t.next(n)})},e=o([r.Injectable()],e)}();t.ProductService=a},277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(278),n(424),n(435);var o=n(735),r=n(438);o.platformBrowserDynamic().bootstrapModule(r.AppModule)},438:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),c=n(439),i=n(60),a=n(441),s=n(443),l=n(733),u=n(276),p=function(){function e(){}return e=o([r.NgModule({declarations:[a.AppComponent,s.ProductListComponent,l.TypeaheadComponent],imports:[i.BrowserModule,c.FormsModule],providers:[u.ProductService],bootstrap:[a.AppComponent]})],e)}();t.AppModule=p},441:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);n(736);var c=function(){function e(){}return e=o([r.Component({selector:"app-root",template:n(442)})],e)}();t.AppComponent=c},442:function(e,t){e.exports='<div class="app">\n    <header>\n        <span>\n            <i class="material-icons">\n                    shopping_cart\n            </i>\n            Online Store\n        </span>\n    </header>\n    <main>\n        <product-list></product-list>\n    </main>\n    <footer>\n        <span>\n            Online Store &copy; 2018-2019\n        </span>\n    </footer>\n</div>'},443:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var c=n(0);n(741);var i=n(124),a=n(276),s=function(){function e(e){this.productService=e,this.selectedProduct=null,this.productObservable=i.Observable.of([]),this.selectedCompany=null,this.companyObservable=i.Observable.of([]),this.selectedColor=null,this.colorObservable=i.Observable.of([])}return e.prototype.productInputChange=function(e){this.productObservable=this.productService.getProducts(e)},e.prototype.productSelect=function(e){this.selectedProduct=e},e.prototype.companyInputChange=function(e){this.companyObservable=this.productService.getCompany(this.selectedProduct,e)},e.prototype.companySelect=function(e){this.selectedCompany=e},e.prototype.colorInputChange=function(e){this.colorObservable=this.productService.getColors(e)},e.prototype.colorSelect=function(e){this.selectedCompany=e},e=o([c.Component({selector:"product-list",template:n(732)}),r("design:paramtypes",[a.ProductService])],e)}();t.ProductListComponent=s},732:function(e,t){e.exports='<section class="product-list">\n    <article class="search-box">\n        <fieldset class="buy">\n            <label>Buy</label>\n            <typeahead [data]="productObservable" (onInputChange)="productInputChange($event)" (onSelect)="productSelect($event)"></typeahead>\n        </fieldset>\n        <fieldset class="company">\n            <label>Company</label>\n            <typeahead [data]="companyObservable" (onInputChange)="companyInputChange($event)" (onSelect)="companySelect($event)"></typeahead>\n        </fieldset>\n        <fieldset class="color">\n            <label>Color</label>\n            <typeahead [data]="colorObservable" (onInputChange)="colorInputChange($event)" (onSelect)="colorSelect($event)"></typeahead>\n        </fieldset>\n    </article>\n</section>'},733:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),i=n(124);n(743);var a=function(){function e(){this.input="",this.showSuggestions=!1,this.itemList=[],this.onInputChange=new c.EventEmitter,this.onSelect=new c.EventEmitter}return Object.defineProperty(e.prototype,"data",{set:function(e){var t=this;e.subscribe(function(e){t.itemList=e})},enumerable:!0,configurable:!0}),e.prototype.select=function(e){this.input=e,this.onSelect.emit(e)},e.prototype.onKeyup=function(e){this.onInputChange.emit(e.target.value)},e.prototype.onFocus=function(){this.showSuggestions=!0},e.prototype.onBlur=function(){var e=this;setTimeout(function(){e.showSuggestions=!1},200)},o([c.Input(),r("design:type",i.Observable),r("design:paramtypes",[i.Observable])],e.prototype,"data",null),o([c.Output(),r("design:type",c.EventEmitter)],e.prototype,"onInputChange",void 0),o([c.Output(),r("design:type",c.EventEmitter)],e.prototype,"onSelect",void 0),e=o([c.Component({selector:"typeahead",template:n(734)})],e)}();t.TypeaheadComponent=a},734:function(e,t){e.exports='<div class="typeahead">\n    <input type="text" [(ngModel)]="input" (focus)="onFocus()" (blur)="onBlur()" (keyup)="onKeyup($event)" />\n    <ul class="typeahead-list" [ngClass]="{\'hide\': !showSuggestions || itemList.length == 0}">\n        \x3c!-- <li *ngFor="let item of data | async as typeaheadList" (click)="select(item)"> --\x3e\n        <li *ngFor="let item of itemList" (click)="select(item)">\n            {{item}}\n        </li>\n    </ul>\n</div>'},736:function(e,t){},741:function(e,t){},743:function(e,t){}});
//# sourceMappingURL=app.js.map