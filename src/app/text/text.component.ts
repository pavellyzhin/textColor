import { Component, OnInit } from '@angular/core';
import { CombineWordColorService } from '../combine-word-color.service';
import { dataColor } from '../data';
import { colorModel } from '../info-block.model';
import { TextColorService } from '../text-color.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  public items: {a:colorModel,b:colorModel}[] = [];
  public count: number = 50;
  constructor(
    private textColorService: TextColorService    
  ) { 
    this.combine();
  }

  public combine(){
    this.items = [];
    for(let i =0; i < this.count; i++){
      this.items.push(this.textColorService.combine());
    }
  }

  public restart(){
    this.combine();
  }

  ngOnInit() {
  }

}
