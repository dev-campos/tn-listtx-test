import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [	
    AppComponent,
      BaseComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: BaseComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
