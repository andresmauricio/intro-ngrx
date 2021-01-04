import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor(public countService: CountService) { }

  ngOnInit(): void {
  }
}
