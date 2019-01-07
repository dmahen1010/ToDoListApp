import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalDialogComponent } from './edit-modal-dialog.component';

xdescribe('EditModalDialogComponent', () => {
  let component: EditModalDialogComponent;
  let fixture: ComponentFixture<EditModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditModalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
