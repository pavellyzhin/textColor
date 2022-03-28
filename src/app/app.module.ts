import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TextComponent } from './text/text.component';
import { WordVariantComponent } from './word-variant/word-variant.component';
import { RouterModule } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { dataColor } from './data';
import { CombineWordColorService } from './combine-word-color.service';

@NgModule({
 
 
  declarations: [
    AppComponent,
    TextComponent,
    WordVariantComponent,
    ColorComponent,
    MainComponent
  ], imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [dataColor,CombineWordColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
