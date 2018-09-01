import {Component, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {Observable} from 'rxjs';
import './range.component.scss';

@Component({
    selector: 'range',
    templateUrl: './range.component.html'
})
export class RangeComponent implements AfterViewInit{

    min: Number;
    max: Number;
    step: Number;

    _rangeSeparators: string[];

    constructor(){
        
    }

    @Input('range-separators')
    set rangeSeparators(separators: string[]){
        this._rangeSeparators = separators;

        this.min = 1;
        this.max = separators.length;

        this.step = 1;
        this.label = separators[0];

    }

    label: string;
    onInput(event: any){
        // console.log("range change", event.target.value);
        let val = event.target.value;
        this.label = this._rangeSeparators[val-1];
    }

    ngAfterViewInit(){
        this.onRangeChange.emit(this._rangeSeparators[0]);
    }

    @Output()
    onRangeChange: EventEmitter<string> = new EventEmitter<string>();

    onChange(event: any){
        let val = event.target.value;
        this.onRangeChange.emit(this._rangeSeparators[val-1]);
    }


}