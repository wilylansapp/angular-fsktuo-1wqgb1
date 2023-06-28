import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  @Input() formGroupName: string;
  form: FormArray;
  constructor(
    private rootFormGroup: FormGroupDirective,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormArray;
    console.log(this.form);
    this.add();
  }

  add() {
    const control = this.fb.control('');
    this.form.push(control);
  }
}
