import { Component, ComponentRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { BurgerComponent } from './burger/burger.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { OvanComponent } from './ovan/ovan.component';
import { WatchComponent } from './watch/watch.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  productNames = {
    mobile: 'mobile',
    laptop: 'laptop',
    watch: 'watch',
    burger: 'burger',
    ovan: 'ovan'
  }
containerInstances:Map<string,ComponentRef<any>>=new Map<string,ComponentRef<any>>();

  constructor() { }

  ngOnInit(): void {
  }
  createCompoenent(componentName: string): Type<any> {
    var containerInstance = this.container.createComponent(this.getComponentType(componentName));

    containerInstance.instance.name = 'thats coming from input';
    containerInstance.instance.closeEvent.subscribe((e: any) => {
      console.log(e);
      containerInstance.destroy();
    })
    console.log(typeof (MobileComponent));
    return MobileComponent;
  }

  getComponentType(name: string): Type<any> {
    let types: Type<any> = MobileComponent;
    switch (name) {
      case this.productNames.mobile: {
        types = MobileComponent;
        break;
      }
      case this.productNames.laptop: {
        types = LaptopComponent;
        break;
      }
      case this.productNames.burger: {
        types = BurgerComponent;
        break;
      }
      case this.productNames.ovan: {
        types = OvanComponent;
        break;
      }
      case this.productNames.watch: {
        types = WatchComponent;
        break;
      }
    }
    return types;
  }
}
