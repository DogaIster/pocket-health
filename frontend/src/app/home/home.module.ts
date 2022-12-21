import {NgModule} from '@angular/core';
import {HomeComponent} from "./home.component";
import {SignupNewsletterModule} from "../signup-newsletter/signup-newsletter.module";
import {AngularMaterialModule} from "../material.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    AngularMaterialModule,
    SignupNewsletterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
