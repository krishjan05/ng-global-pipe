import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringTranformPipe } from '../pipes/string-tranform.pipe';

@NgModule({
  declarations: [StringTranformPipe],
  imports: [
    CommonModule
  ],
  exports: [StringTranformPipe]
})
export class SharedModule { }
