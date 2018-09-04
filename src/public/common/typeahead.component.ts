import {Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Observable} from 'rxjs';
import './typeahead.component.scss';

@Component({
    selector: 'typeahead',
    templateUrl: './typeahead.component.html'
})
export class TypeaheadComponent {

    input:string = ''
    showSuggestions:boolean = false
    itemList: string[] = [];
    currentEntityName: string = null;

    @ViewChild("inputField")
    inputField: ElementRef;

    @Input()
    config: any;

    @Input()
    set resetInput(reset: boolean){
        if(reset){
            this.input = ""
        }
    }

    @Output()
    onSelect: EventEmitter<string> = new EventEmitter<string>()


    select(item: string){
        let tokens = this.input.split(":");
        tokens[tokens.length - 1] = item + " ";
        this.input = tokens.join(":");
        this.itemList = [];
        this.inputField.nativeElement.focus();
    }

    getSearchCriteria(str: string): any{
        let tokens = str.split(" ");
        if(tokens.length){
            let lastToken = tokens[tokens.length -1];
            if(lastToken && lastToken.indexOf(":") != -1){
                let currentSearchCriteria = lastToken.split(":");
                return {
                    entityName: currentSearchCriteria[0],
                    searchText: currentSearchCriteria[1]
                } 
            }
        }
        return null;
    }

    getConfigForEntity(entityName: string): any{
        let output = null;
        Object.keys(this.config).forEach(k => {
            if(k == entityName){
                output = this.config[k];
            }
        });
        return output;
    }

    onInput(event: any){
        this.showSuggestions = true;
        let searchCriteria = this.getSearchCriteria(event.target.value);
        // console.log("searchCriteria", searchCriteria);

        if(searchCriteria){
            let entityConfig = this.getConfigForEntity(searchCriteria.entityName);
            if(entityConfig){
                // console.log("entityConfig", entityConfig, this.itemList, this.showSuggestions, searchCriteria.searchText);
        
                this.currentEntityName = searchCriteria.entityName;
                entityConfig.onChange(searchCriteria.searchText).subscribe((v: string[]) => {
                    // console.log("onChange subscribe", v);
                    this.itemList = v;
                })
            }
        }
    }

    onFocus(){
        this.showSuggestions = true;
    }

    onBlur(event: any){
        setTimeout(() => {
            let tokens = this.input.split(" ");
            tokens.forEach(t => {
                if(t.indexOf(":") != -1){
                    let searchCriteria = t.split(":");
                    let entityName = searchCriteria[0], searchText = searchCriteria[1];

                    let entityConfig = this.getConfigForEntity(entityName);
                    entityConfig.onSelect(searchText);
                }
            })
    
            this.showSuggestions = false;
        }, 200);
    }
}