import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDogComponent } from './admin-dog.component';

describe('AdminDogComponent', () => {
  let component: AdminDogComponent;
  let fixture: ComponentFixture<AdminDogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDogComponent]
    });
    fixture = TestBed.createComponent(AdminDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
