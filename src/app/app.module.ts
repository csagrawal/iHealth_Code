import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScreenFreezeComponent } from './screen-freeze/screen-freeze.component';
import { IExerciseComponent } from './i-exercise/i-exercise.component';
import { PopupDataComponent } from './popup-data/popup-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenFreezeComponent,
    IExerciseComponent,
    PopupDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
