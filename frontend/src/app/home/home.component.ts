import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SignupNewsletterComponent} from "../signup-newsletter/signup-newsletter.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SignupNewsletterComponent, {
      width: '300px',
    });
  }
}
