import { Component, Input, OnInit } from '@angular/core';
import { Log } from '@angular/core/testing/src/logger';
import { AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css'],
})
export class AgeComponent implements OnInit {
  @Input() controlName: string;
  controlAge: AbstractControl;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    console.log('age component', this.rootFormGroup.form);
    this.controlAge = this.rootFormGroup.form.get(this.controlName);
  }
}
