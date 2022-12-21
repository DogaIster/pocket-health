import {NgModule} from '@angular/core';
import {SignupNewsletterComponent} from "./signup-newsletter.component";
import {ReactiveFormsModule} from '@angular/forms';
import {AngularMaterialModule} from '../material.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [SignupNewsletterComponent],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  exports: [
    SignupNewsletterComponent
  ]
})
export class SignupNewsletterModule {
}
