import { Component, OnInit, ViewChild, Input, ElementRef, Renderer2, forwardRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InlineEditComponent),
  multi: true
};

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
  styleUrls: ['./inline-edit.component.scss']
})
export class InlineEditComponent implements ControlValueAccessor, OnInit {
  @ViewChild('inlineEditControl') inlineEditControl;
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;

  private _value: string = '';
  private preValue: string = '';
  public editing: boolean = false;

  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  constructor() { }

  ngOnInit(): void {
  }

  get value(): any {
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  writeValue(value: any) {
    this._value = value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  onBlur($event: Event) {
    this.editing = false;
  }

  edit(value) {
    if (this.disabled) {
      return;
    }

    this.preValue = value;
    this.editing = true;

    setTimeout(_ => this.inlineEditControl.nativeElement.focus());
  }
}
