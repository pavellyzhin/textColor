import { Injectable } from '@angular/core';
import { dataColor } from './data';
import { colorModel } from './info-block.model';

@Injectable({
  providedIn: 'root'
})
export class TextColorService {

  constructor(
    private dataColor: dataColor
  ) { 
  }

  public randRealWordColor(){
    let a = this.dataColor.data[Math.floor(Math.random() * this.dataColor.data.length)];
    return a;
  }

  public combine(){
    let a = this.randRealWordColor();
    let b = this.randCombineWordColor(a);

    return {a:a,b:b};
  }

  public randCombineWordColor(item:colorModel){
    let a = this.dataColor.data[Math.floor(Math.random() * this.dataColor.data.length)];
    
    if(a.title == item.title){
      return this.randCombineWordColor(item);
    } else {
      return a;
    }
  }

  public shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

public randVariantWordColor(ar:colorModel[]):number{
  let a = Math.floor(Math.random() * this.dataColor.data.length);

  for(let i =0; i < ar.length; i++){
    if(this.dataColor.data[a].title == ar[i].title){
      return this.randVariantWordColor(ar);
    } else {
      if(i+1 == ar.length){
        return a;
      }
    }
  }
}
}
