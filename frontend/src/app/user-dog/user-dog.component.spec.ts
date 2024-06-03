import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDogComponent } from './user-dog.component';

describe('UserDogComponent', () => {
  let component: UserDogComponent;
  let fixture: ComponentFixture<UserDogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDogComponent]
    });
    fixture = TestBed.createComponent(UserDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
