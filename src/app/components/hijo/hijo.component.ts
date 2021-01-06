import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() public count: number;
  @Output() contadorHijo = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  multiplicar() {
    this.count *= 2;
    this.contadorHijo.emit(this.count);
  }

  dividir() {
    this.count /= 2;
    this.contadorHijo.emit(this.count);
  }

  resetNieto(event) {
    this.count = event;
    this.contadorHijo.emit(this.count);
  }

}
