import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './shared/component/tab/tab.component';
import { StdComponent } from './shared/component/table/std.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    StdComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
