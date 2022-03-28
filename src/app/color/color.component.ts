import { DeprecatedDecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { dataColor } from '../data';
import { colorModel } from '../info-block.model';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  public data: colorModel[] = [];

  constructor(
    private dataColor: dataColor
    ) { 
      this.data = this.dataColor.data;
    }

  ngOnInit() {
  }

}
