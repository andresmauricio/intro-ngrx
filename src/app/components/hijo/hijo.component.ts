import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { MULTIPLY } from 'src/app/count.action';
import { CountService } from 'src/app/services/count.service';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor(public countService: CountService, private store: Store<{count: number}>) { }

  ngOnInit(): void {
  }

  multiply() {
    this.store.dispatch(MULTIPLY({value: 5 }))
  }
}
