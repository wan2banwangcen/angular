import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { Child1Component } from './components/child1/child1.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
