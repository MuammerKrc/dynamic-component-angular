import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentComponent } from './dynamic-component.component';
import { MobileComponent } from './mobile/mobile.component';



@NgModule({
  declarations: [
    DynamicComponentComponent,
    MobileComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DynamicComponentComponent
  ]
})
export class DynamicComponentModule { }
