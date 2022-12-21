import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {ClientInfoService} from "../services/client-info.service";

@Component({
  selector: 'app-signup-newsletter',
  templateUrl: './signup-newsletter.component.html',
  styleUrls: ['./signup-newsletter.component.css']
})

export class SignupNewsletterComponent implements OnInit {
  // @ts-ignore
  customerInformationForm: FormGroup;
  isSubmitted: boolean = false;
  phoneNumberPattern: string = '^[0-9]*$';
  letterPattern: string = '^[a-zA-Z]*$';
  addSubscription: Subscription | undefined;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<SignupNewsletterComponent>,
              public clientInfoService: ClientInfoService,
              private httpClient: HttpClient,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.customerInformationForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2),
        Validators.maxLength(30), Validators.pattern(this.letterPattern)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(this.phoneNumberPattern),
        Validators.minLength(10), Validators.maxLength(10)]),
      colour: new FormControl('', [Validators.minLength(3), Validators.pattern(this.letterPattern)])
    });
  }

  get name() {
    return this.customerInformationForm.get('name');
  }

  subscribeNews(): void {
    let form = JSON.stringify(this.customerInformationForm.value);
    if (this.customerInformationForm.valid) {
      this.addSubscription = this.clientInfoService.addClientInfo(form)
        .subscribe()
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    this.dialogRef.close();
    this.subscribeNews();
    this.openSnackBar(`You successfully subscribed!`, 'Ok');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  cancel() {
    this.isSubmitted = false;
    this.dialogRef.close();
  }
}
