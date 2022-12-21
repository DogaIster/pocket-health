import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from "@angular/material/dialog";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [MatDialogModule],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>(['open'])}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
