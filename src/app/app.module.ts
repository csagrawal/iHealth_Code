import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ScreenFreezeComponent } from './screen-freeze/screen-freeze.component';
import { IExerciseComponent } from './i-exercise/i-exercise.component';
import { PopupDataComponent } from './popup-data/popup-data.component';
import { HttpCallComponent } from './http-call/http-call.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenFreezeComponent,
    IExerciseComponent,
    PopupDataComponent,
    HttpCallComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
