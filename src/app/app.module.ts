import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';
import { AgeComponent } from './age/age.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HeroFormComponent,
    FormArrayComponent,
    AgeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
