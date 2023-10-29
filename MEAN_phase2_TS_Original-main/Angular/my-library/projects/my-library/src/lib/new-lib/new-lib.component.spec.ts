import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLibComponent } from './new-lib.component';

describe('NewLibComponent', () => {
  let component: NewLibComponent;
  let fixture: ComponentFixture<NewLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
