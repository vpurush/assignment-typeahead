import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import './typeahead.component.scss';

@Component({
    selector: 'typeahead',
    templateUrl: './typeahead.component.html'
})
export class TypeaheadComponent {

    input:string = ''
    showSuggestions:boolean = false
    itemList: string[] = []

    @Input()
    set data(data: Observable<string[]>){
        data.subscribe(val => {
            this.itemList = val;
        })
    }

    @Output()
    onInputChange: EventEmitter<string> = new EventEmitter<string>()

    @Output()
    onSelect: EventEmitter<string> = new EventEmitter<string>()


    select(item: string){
        this.input = item;
        this.onSelect.emit(item);
    }

    onKeyup(event: any){
        this.onInputChange.emit(event.target.value);
    }

    onFocus(){
        this.showSuggestions = true;
    }

    onBlur(event: any){
        setTimeout(() => {
            this.showSuggestions = false;
            if(event.target.value == ""){
                this.onSelect.emit("");
            }
        }, 200);
    }
}