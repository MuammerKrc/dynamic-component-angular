import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MobileComponent } from './mobile/mobile.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {
  @ViewChild('container',{read:ViewContainerRef,static:true}) container!:ViewContainerRef;

  constructor() { }

  ngOnInit(): void {

  }
createCompoenent(){
  this.container.clear();
  this.container.createComponent(MobileComponent)
}
}
