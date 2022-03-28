import { Component, OnInit } from '@angular/core';

import { CombineWordColorService } from '../combine-word-color.service';
import { dataColor } from '../data';
import { colorModel } from '../info-block.model';
import { TextColorService } from '../text-color.service';

@Component({
  selector: 'app-word-variant',
  templateUrl: './word-variant.component.html',
  styleUrls: ['./word-variant.component.css']
})
export class WordVariantComponent implements OnInit {

  private timeOutId: any;
  
  public nowItem: colorModel = new colorModel();
  public combineItem: colorModel = new colorModel();
  public itemId: number = 0;

  public variantItems: colorModel[] = [];
  
  public trueAnswer: boolean | null= null;
  public loose: number = 0;
  public final: boolean = false;
  public count: number = 0;
  public disabled: boolean = false;
  public vIndex:number|null = null;

  constructor(
    private dataColor: dataColor,
    private textColorService: TextColorService
  ) {
    this.count = 200;
    this.nowItem = this.textColorService.randRealWordColor();
    this.combineItem = this.textColorService.randCombineWordColor(this.nowItem);
    this.variants(3);
  }


  public answer(item:colorModel){
    this.disabled = true;
    if(item == this.combineItem){
      // good
      this.clrTimer();
      this.trueAnswer = true;
    } else {
      // no good
      this.clrTimer();
      this.trueAnswer = false;
      this.loose++;
    }
   
      this.next();
   
  }

  public variants(count=1){
    
    this.variantItems=[];
    let ar:colorModel[] = [];
    ar.push(this.combineItem);

    for(let i =0; i < count; i++){
      let a = this.textColorService.randVariantWordColor(ar);
      ar.push(this.dataColor.data[a]);
    }

    this.variantItems = this.textColorService.shuffleArray(ar);
    
  }

 public next(){
    setTimeout(()=>{
      this.trueAnswer=null;
      if(this.itemId+1 == this.count){
        this.finish();
      } else{
        this.disabled=false;
        this.vIndex = null;
        this.itemId++;
        this.nowItem = this.textColorService.randRealWordColor();
        this.combineItem = this.textColorService.randCombineWordColor(this.nowItem);
        this.variants(3);
        this.timeOut();
      }
    },2000);
     
  }

  public finish(){
    this.final = true;
  }

  private timeOut(){
    /*this.timeOutId = setTimeout(()=>{
      this.answer(new itemCombineModel());
    },5000);*/
  }

  public restart(){
    this.vIndex = null;
    this.itemId = 0;
    this.final=false;    
    this.loose = 0;
    // после начала раз в пять секунд 
    // выползает одно из слов в комбинации
    this.nowItem = this.textColorService.randRealWordColor();
    this.combineItem = this.textColorService.randCombineWordColor(this.nowItem);
    this.variants(3);
  }

  private clrTimer(){
    clearTimeout(this.timeOutId);
  }

  public classVariant(index:number)  {
    this.vIndex = index;
    
  }

  ngOnInit() {
  }

}
