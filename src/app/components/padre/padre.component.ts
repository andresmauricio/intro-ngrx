import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  public count = 10;
  constructor() { }

  ngOnInit(): void {
  }

  incrementar(): void {
    this.count += 1;
  }

  decrementar(): void {
    this.count -= 1;
  }

}
