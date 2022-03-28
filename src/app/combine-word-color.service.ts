import { Injectable } from '@angular/core';
import { colorModel } from './info-block.model';

@Injectable({
  providedIn: 'root'
})
export class CombineWordColorService {

  constructor() { }

  private rand(num:number):{a:number,b:number}{
      let a = Math.floor(Math.random() * num);
      let b = Math.floor(Math.random() * num);

      if(a == b) {
        return this.rand(num);
      } else {
        return {a:a,b:b};
      }
  }
}
