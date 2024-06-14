import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOutputComponent } from './add-edit-output.component';

describe('AddEditOutputComponent', () => {
  let component: AddEditOutputComponent;
  let fixture: ComponentFixture<AddEditOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
