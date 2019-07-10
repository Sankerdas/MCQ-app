import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQnsComponent } from './add-qns.component';

describe('AddQnsComponent', () => {
  let component: AddQnsComponent;
  let fixture: ComponentFixture<AddQnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
