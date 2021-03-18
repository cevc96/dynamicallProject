import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.scss']
})
export class InputtextComponent implements OnInit {
  @Input() type:string = "text";
  @Input() placeholder:string;
  @Input() validation_message:string;
  @Input() formControl:FormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
