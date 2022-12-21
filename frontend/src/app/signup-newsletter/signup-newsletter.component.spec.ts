import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SignupNewsletterComponent} from './signup-newsletter.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

describe('SignupNewsletterComponent', () => {
  let component: SignupNewsletterComponent;
  let fixture: ComponentFixture<SignupNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupNewsletterComponent],
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}},
        {provide: MatDialog, useValue: {}},
        {provide: MatSnackBar, useValue: {}}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SignupNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check initial form values of the form', () => {
    const customerInformationFormGroup = component.customerInformationForm;
    const customerInformationValues = {
      name: '',
      email: '',
      phoneNumber: '',
      colour: ''
    }
    expect(customerInformationFormGroup.value).toEqual(customerInformationValues);
  });

  it('should require a valid email', () => {
    component.customerInformationForm.setValue({
      "name": "Doga",
      "email": "abcd",
      "phoneNumber": 6478942802,
      "colour": "Green"
    });

    expect(component.customerInformationForm.valid).toEqual(false);
  });

  it('should be a valid form without colour', () => {
    component.customerInformationForm.setValue({
      "name": "Doga",
      "email": "isterdoga@hotmail.com",
      "phoneNumber": 6478942802,
      "colour": ""
    });
    expect(component.customerInformationForm.valid).toEqual(true);
  });

  it('should be a valid form with colour', () => {
    component.customerInformationForm.setValue({
      "name": "Doga",
      "email": "isterdoga@hotmail.com",
      "phoneNumber": 6478942802,
      "colour": "Green"
    });
    expect(component.customerInformationForm.valid).toEqual(true);
  });

  it('should require name', () => {
    component.customerInformationForm.setValue({
      "name": "",
      "email": "abcd",
      "phoneNumber": 6478942802,
      "colour": "Green"
    });

    expect(component.customerInformationForm.valid).toEqual(false);
  });

  it('should require email', () => {
    component.customerInformationForm.setValue({
      "name": "Doga",
      "email": "",
      "phoneNumber": 6478942802,
      "colour": "Green"
    });
    expect(component.customerInformationForm.valid).toEqual(false);
  });

  it('should require phone number', () => {
    component.customerInformationForm.setValue({
      "name": "Doga",
      "email": "isterdoga@hotmail.com",
      "phoneNumber": "",
      "colour": "Green"
    });
    expect(component.customerInformationForm.valid).toEqual(false);
  });
});
