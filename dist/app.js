!function(e){function t(t){for(var o,c,a=t[0],s=t[1],l=t[2],u=0,d=[];u<a.length;u++)c=a[u],r[c]&&d.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(p&&p(t);d.length;)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={0:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dist";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var p=s;i.push([278,1]),n()}({183:function(e,t){function n(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=183},277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(e,t,n,o,r){this.product=e,this.company=t,this.price=n,this.color=o,this.imageUrl=r}}();t.Product=o},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(279),n(425),n(436);var o=n(746),r=n(439);o.platformBrowserDynamic().bootstrapModule(r.AppModule)},439:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(440),c=n(60),a=n(442),s=n(444),l=n(736),p=n(738),u=n(740),d=n(742),f=n(744),h=n(91),g=function(){function e(){}return e=o([r.NgModule({declarations:[a.AppComponent,s.ProductListComponent,d.TypeaheadComponent,f.RangeComponent,l.ProductSearchComponent,p.ProductResultComponent,u.ProductResultItemComponent],imports:[c.BrowserModule,i.FormsModule],providers:[h.ProductService],bootstrap:[a.AppComponent]})],e)}();t.AppModule=g},442:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);n(747);var i=function(){function e(){}return e=o([r.Component({selector:"app-root",template:n(443)})],e)}();t.AppComponent=i},443:function(e,t){e.exports='<div class="app">\n    <header>\n        <span>\n            <i class="material-icons">\n                    shopping_cart\n            </i>\n            Online Store\n        </span>\n    </header>\n    <main>\n        <product-list></product-list>\n    </main>\n    <footer>\n        <span>\n            Online Store &copy; 2018-2019\n        </span>\n    </footer>\n</div>'},444:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);n(752);var c=n(91),a=function(){function e(e){this.productService=e}return e.prototype.search=function(e){var t=this;this.searchCriteria=e,this.productService.getProductList(e.product,e.company,e.price,e.color).subscribe(function(e){t.searchResult=e})},e.prototype.lastItemScrolledIntoView=function(){var e=this;this.productService.getProductList(this.searchCriteria.product,this.searchCriteria.company,this.searchCriteria.price,this.searchCriteria.color,this.searchResult.length).subscribe(function(t){Array.prototype.push.apply(e.searchResult,t)})},e=o([i.Component({selector:"product-list",template:n(735)}),r("design:paramtypes",[c.ProductService])],e)}();t.ProductListComponent=a},733:function(e,t,n){"use strict";n.r(t),n.d(t,"generateProductList",function(){return i});var o=n(277);const r={shoes:["shoe-1.png","shoe-2.png","shoe-3.png","shoe-4.jpeg"],electronics:["phone-1.png","phone-2.png","phone-3.png","camera-2.png","camera-3.jpeg"],grooming:["grooming-1.png","grooming-2.png","grooming-3.png","grooming-4.png"],handbags:["hb-1.png","hb-2.png","hb-3.jpeg","hb-4.jpeg"],kitchen:["kitchen-1.png","kitchen02.png","kitchen-3.png","kitchen-4.png"],fashion:["fashion-1.jpeg","fashion-2.jpeg","fashion-3.jpeg"]},i=(e,t,n,i,c)=>{console.log("product, company, price, color, noOfItemsAlreadyLoaded",e,t,n,i,c);let a=[];if(c<50){let c,s,l;if(-1!=n.indexOf("to")){let e=n.split("to");c=parseInt(e[0].replace("$","")),s=parseInt(e[1].replace("$",""))}else-1!=n.indexOf("<")?(c=0,s=parseInt(n.replace("<","").replace("$",""))):(c=parseInt(n.replace(">","").replace("$","")),s=99999999);l=s-c,console.log("maxPrice minPrice",s,c),e=e||"Handbags",t=t||"Gucci",n=n||"$401 to $1000",console.log("color",i),i=i||"orange",console.log("color",i);for(let n=0;n<20;n++){let n=r[e.toLowerCase()];a.push(new o.Product(e,t,Math.ceil(Math.random()*l+c),i,n[Math.floor(Math.random()*n.length)]))}}return console.log("generator output",a),a}},734:function(e,t,n){"use strict";n.r(t),n.d(t,"masterData",function(){return o});const o={products:["Electronics","Shoes","Handbags","Kitchen","Fashion","Grooming"],company:{Electronics:["Nikon","Samsung","Sony","LG","IFB","Panasonic"],Shoes:["Reebok","Nike","Puma"],Handbags:["Gucci","Capreese","Guess","Fossil"],Kitchen:["Godrej","Samsung","LG","IFB","Panasonic"],Fashion:["Gucci Fashion","Capreese","Guess","Fossil"],Grooming:["Phillips","Panasonic","Casio"]},colors:["white","blue","green","yellow","orange"]}},735:function(e,t){e.exports='<product-search (onSearch)="search($event)"></product-search>\n<product-result [data]="searchResult" (lastItemScrolledIntoView)="lastItemScrolledIntoView()"></product-result>'},736:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);n(754);var c=n(125),a=n(91),s=function(){function e(e){this.productService=e,this.selectedProduct=null,this.productObservable=c.Observable.of([]),this.selectedCompany=null,this.companyObservable=c.Observable.of([]),this.selectedColor=null,this.colorObservable=c.Observable.of([]),this.onSearch=new i.EventEmitter}return e.prototype.productInputChange=function(e){this.productObservable=this.productService.getProducts(e)},e.prototype.productSelect=function(e){this.selectedProduct=e,this.companyObservable=c.Observable.of([])},e.prototype.companyInputChange=function(e){this.companyObservable=this.productService.getCompany(this.selectedProduct,e)},e.prototype.companySelect=function(e){this.selectedCompany=e},e.prototype.colorInputChange=function(e){this.colorObservable=this.productService.getColors(e)},e.prototype.colorSelect=function(e){this.selectedColor=e},e.prototype.priceSelect=function(e){this.selectedPrice=e},e.prototype.search=function(){this.onSearch.emit({product:this.selectedProduct,company:this.selectedCompany,color:this.selectedColor,price:this.selectedPrice})},o([i.Output(),r("design:type",i.EventEmitter)],e.prototype,"onSearch",void 0),e=o([i.Component({selector:"product-search",template:n(737)}),r("design:paramtypes",[a.ProductService])],e)}();t.ProductSearchComponent=s},737:function(e,t){e.exports='<section class="product-search">\n    <article class="search-box">\n        <fieldset class="buy">\n            <label>Buy</label>\n            <typeahead [data]="productObservable" (onInputChange)="productInputChange($event)" (onSelect)="productSelect($event)"></typeahead>\n        </fieldset>\n        <fieldset class="company">\n            <label>Company</label>\n            <typeahead [data]="companyObservable" (onInputChange)="companyInputChange($event)" (onSelect)="companySelect($event)"></typeahead>\n        </fieldset>\n        <fieldset class="color">\n            <label>Color</label>\n            <typeahead [data]="colorObservable" (onInputChange)="colorInputChange($event)" (onSelect)="colorSelect($event)"></typeahead>\n        </fieldset>\n        <fieldset class="price">\n            <label>Price</label>\n            <range [range-separators]="[\'< $400\', \'$401 to $1000\', \'$1001 to $10000\', \'> $10000\']" (onRangeChange)="priceSelect($event)"></range>\n        </fieldset>\n        <fieldset class="buttons">\n            <button (click)="search()">Search</button>\n        </fieldset>\n    </article>\n</section>'},738:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);n(756);var c=n(91),a=function(){function e(e){this.productService=e,this.lastItemScrolledIntoView=new i.EventEmitter}return e.prototype.childScrolledIntoView=function(e){e==this.data.length-1&&this.lastItemScrolledIntoView.emit()},o([i.Input(),r("design:type",Array)],e.prototype,"data",void 0),o([i.Output(),r("design:type",i.EventEmitter)],e.prototype,"lastItemScrolledIntoView",void 0),e=o([i.Component({selector:"product-result",template:n(739)}),r("design:paramtypes",[c.ProductService])],e)}();t.ProductResultComponent=a},739:function(e,t){e.exports='<section class="product-search-result">\n    <product-result-item *ngFor="let p of data; let i = index" \n        [imageUrl]="p.imageUrl" \n        [product]="p.product"\n        [company]="p.company"\n        [price]="p.price"\n        [color]="p.color"\n        (scrolledIntoView)="childScrolledIntoView(i)"></product-result-item>\n</section>'},740:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);n(758);var c=function(){function e(){this.scrolledIntoView=new i.EventEmitter,this.isInViewport=function(e){var t,n;return n=document.documentElement,!!(t=e.getBoundingClientRect())&&t.bottom>=0&&t.right>=0&&t.top<=n.clientHeight&&t.left<=n.clientWidth},this.debouceTimer=null,this.hidden=!1,this.height=null,this.width=null}return e.prototype.scrollHandler=function(){var e=this;this.debouceTimer&&(clearTimeout(this.debouceTimer),this.debouceTimer=null),this.debouceTimer=setTimeout(function(){e.isInViewport(e.elm.nativeElement)?(e.showMe(),e.scrolledIntoView.emit()):e.hideMe()},250)},e.prototype.ngAfterViewInit=function(){document.addEventListener("scroll",this.scrollHandler.bind(this))},e.prototype.hideMe=function(){if(!this.hidden){this.hidden=!0;this.height=this.elm.nativeElement.offsetHeight-32-2,this.width=this.elm.nativeElement.offsetWidth-32-2,console.log("height width",this.height,this.width)}},e.prototype.showMe=function(){this.hidden=!1,this.height=null,this.width=null},o([i.Input(),r("design:type",String)],e.prototype,"product",void 0),o([i.Input(),r("design:type",String)],e.prototype,"company",void 0),o([i.Input(),r("design:type",String)],e.prototype,"price",void 0),o([i.Input(),r("design:type",String)],e.prototype,"color",void 0),o([i.Input(),r("design:type",String)],e.prototype,"imageUrl",void 0),o([i.ViewChild("elm"),r("design:type",i.ElementRef)],e.prototype,"elm",void 0),o([i.Output(),r("design:type",i.EventEmitter)],e.prototype,"scrolledIntoView",void 0),e=o([i.Component({selector:"product-result-item",template:n(741)})],e)}();t.ProductResultItemComponent=c},741:function(e,t){e.exports='<div class="product-item" #elm [ngStyle]="{\'height.px\': height, \'width.px\': width}">\n    <div *ngIf="!hidden">\n        <img [src]="\'/dist/images/\' + imageUrl" class="product-image" />\n        <span class="product">\n            <label>Product:</label>\n            {{product}}\n        </span>\n        <span class="company">\n            <label>Company:</label>\n            {{company}}\n        </span>\n        <span class="price">\n            <label>Price:</label>\n            {{price | currency: \'USD\' : \'symbol-narrow\'}}\n        </span>\n        <span class="color">\n            <label>Color:</label>\n            <span class="color-value" [ngStyle]="{\'background-color\': color}">\n            </span>\n        </span>\n    </div>\n</div>'},742:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n(125);n(760);var a=function(){function e(){this.input="",this.showSuggestions=!1,this.itemList=[],this.onInputChange=new i.EventEmitter,this.onSelect=new i.EventEmitter}return Object.defineProperty(e.prototype,"data",{set:function(e){var t=this;e.subscribe(function(e){t.itemList=e})},enumerable:!0,configurable:!0}),e.prototype.select=function(e){this.input=e,this.onSelect.emit(e)},e.prototype.onKeyup=function(e){this.onInputChange.emit(e.target.value)},e.prototype.onFocus=function(){this.showSuggestions=!0},e.prototype.onBlur=function(e){var t=this;setTimeout(function(){t.showSuggestions=!1,""==e.target.value&&t.onSelect.emit("")},200)},o([i.Input(),r("design:type",c.Observable),r("design:paramtypes",[c.Observable])],e.prototype,"data",null),o([i.Output(),r("design:type",i.EventEmitter)],e.prototype,"onInputChange",void 0),o([i.Output(),r("design:type",i.EventEmitter)],e.prototype,"onSelect",void 0),e=o([i.Component({selector:"typeahead",template:n(743)})],e)}();t.TypeaheadComponent=a},743:function(e,t){e.exports='<div class="typeahead">\n    <input type="text" [(ngModel)]="input" (focus)="onFocus()" (blur)="onBlur($event)" (keyup)="onKeyup($event)" />\n    <ul class="typeahead-list" [ngClass]="{\'hide\': !showSuggestions || itemList.length == 0}">\n        \x3c!-- <li *ngFor="let item of data | async as typeaheadList" (click)="select(item)"> --\x3e\n        <li *ngFor="let item of itemList" (click)="select(item)">\n            {{item}}\n        </li>\n    </ul>\n</div>'},744:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);n(762);var c=function(){function e(){this.onRangeChange=new i.EventEmitter}return Object.defineProperty(e.prototype,"rangeSeparators",{set:function(e){this._rangeSeparators=e,this.min=1,this.max=e.length,this.step=1,this.label=e[0]},enumerable:!0,configurable:!0}),e.prototype.onInput=function(e){var t=e.target.value;this.label=this._rangeSeparators[t-1]},e.prototype.ngAfterViewInit=function(){this.onRangeChange.emit(this._rangeSeparators[0])},e.prototype.onChange=function(e){var t=e.target.value;this.onRangeChange.emit(this._rangeSeparators[t-1])},o([i.Input("range-separators"),r("design:type",Array),r("design:paramtypes",[Array])],e.prototype,"rangeSeparators",null),o([i.Output(),r("design:type",i.EventEmitter)],e.prototype,"onRangeChange",void 0),e=o([i.Component({selector:"range",template:n(745)}),r("design:paramtypes",[])],e)}();t.RangeComponent=c},745:function(e,t){e.exports='<div class="range">\n    <input type="range" min="{{min}}" max="{{max}}" step="{{steps}}" value="1" class="slider"  (input)="onInput($event)" (change)="onChange($event)" />\n    <label>{{label}}</label>\n</div>'},747:function(e,t){},752:function(e,t){},754:function(e,t){},756:function(e,t){},758:function(e,t){},760:function(e,t){},762:function(e,t){},91:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(125),c=n(733),a=n(734),s=function(){function e(){}return e.prototype.getProducts=function(e){return new i.Observable(function(t){var n=a.masterData.products.filter(function(t){return-1!=t.toLowerCase().indexOf(e)});t.next(n)})},e.prototype.getCompany=function(e,t){return new i.Observable(function(n){var o=[];e&&e.length?o=a.masterData.company[e]:(o=[],Object.keys(a.masterData.company).forEach(function(e){Array.prototype.push.apply(o,a.masterData.company[e])}));var r=o.filter(function(e){return-1!=e.toLowerCase().indexOf(t)});n.next(r)})},e.prototype.getColors=function(e){return new i.Observable(function(t){var n=a.masterData.colors.filter(function(t){return-1!=t.toLowerCase().indexOf(e)});t.next(n)})},e.prototype.getProductList=function(e,t,n,o,r){void 0===r&&(r=0);var a=c.generateProductList(e,t,n,o,r);return i.Observable.of(a)},e=o([r.Injectable()],e)}();t.ProductService=s}});
//# sourceMappingURL=app.js.map