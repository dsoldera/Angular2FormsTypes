import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'switch-control',
  templateUrl: 'switchControl.component.html',
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SwitchControlComponent}
  ]
})

export class SwitchControlComponent{

  isOn: boolean;

  _onChange: (value: any) => void;

  writeValue(value: any) {
    this.isOn = !!value;
  }

  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched() {}

  toggle(isOn:boolean) {
    this.isOn = isOn;
  }
}