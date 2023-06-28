import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formParent: FormGroup;
  nameForm: FormGroup;
  formArrayExp: FormArray;
  constructor(public formBuilder: FormBuilder) {}
  ngOnInit() {
    this.formParent = this.formBuilder.group({
      nameForm: this.formBuilder.group({
        name: ['', Validators.required],
        password: ['', Validators.required],
      }),
      formArrayExp: this.formBuilder.array(['']),
      age: '',
    });
    this.formParent.valueChanges.subscribe((value) => console.log(value));
    this.formParent.patchValue({
      nameForm: { name: 'remy', password: '12345' },
      formArrayExp: ['zerze', 'rze'],
      age: '58',
    });
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
