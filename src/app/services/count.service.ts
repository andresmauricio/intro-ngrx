import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actionCounter from "../count.action";

@Injectable({ providedIn: 'root' })
export class CountService {
  public count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select('count');
  }

  incrementar(): void {
    // this.count += 1;
    this.store.dispatch(actionCounter.INCREMENT());
  }

  decrementar(): void {
    //this.count -= 1;
    this.store.dispatch(actionCounter.DECREMENT());
  }

  multiplicar() {
    //this.count *= 2;
  }

  dividir() {
    //this.count /= 2;
  }

  reset(): void {
    //this.count = 0;
    this.store.dispatch(actionCounter.RESET());
  }
}
