import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ovan',
  templateUrl: './ovan.component.html',
  styleUrls: ['./ovan.component.css']
})
export class OvanComponent implements OnInit {
  @Input() name: string = '';
  @Output() closeEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  close() {
    this.closeEvent.emit({
      name: this.name
    });
  }
}
