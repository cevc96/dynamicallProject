import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PACKAGES
import { ReactiveFormsModule } from '@angular/forms';

//COMPONENTS
import { InputtextComponent } from './inputtext/inputtext.component';


@NgModule({
  declarations: [InputtextComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
