import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  @Input() public count: number;
  @Output() countNieto = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  reset(): void {
    this.count = 0;
    this.countNieto.emit(0);
  }

}
