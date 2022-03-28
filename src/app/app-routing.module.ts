import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { MainComponent } from './main/main.component';
import { TextComponent } from './text/text.component';
import { WordVariantComponent } from './word-variant/word-variant.component';


const routes: Routes = [{path: '' , component: AppComponent, children:[
  {path: '', component: MainComponent},
  {path: 'v', component: WordVariantComponent},
  {path: 't' , component: TextComponent},
  {path: 'c' , component: ColorComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
