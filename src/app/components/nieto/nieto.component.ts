import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  constructor(public countService: CountService) { }

  ngOnInit(): void {
  }

}
