import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponentComponent } from '../Component/test-component/test-component.component';
import {SelfCrateComponent} from '../Component/SelfCreated-component/selfCreate-component.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    SelfCrateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
