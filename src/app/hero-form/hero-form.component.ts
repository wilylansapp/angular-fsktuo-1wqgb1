import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent implements OnInit {
  @Input() formGroupName: string;
  form: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
    console.log(this.form);
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
