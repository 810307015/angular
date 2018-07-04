import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeDirective } from './direvctives/time.directive';
import { TransPipe } from './pipes/trans.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimeDirective,
    TransPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
