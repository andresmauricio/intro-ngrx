import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CountService {
  public count = 10 ;

  constructor() {}

  incrementar(): void {
    this.count += 1;
  }

  decrementar(): void {
    this.count -= 1;
  }
}
