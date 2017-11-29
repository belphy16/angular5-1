import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import 'rxjs/Rx';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { 
  FileUploadService } from './file-upload.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule

  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
