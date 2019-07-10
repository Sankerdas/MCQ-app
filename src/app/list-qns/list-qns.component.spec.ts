import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQnsComponent } from './list-qns.component';

describe('ListQnsComponent', () => {
  let component: ListQnsComponent;
  let fixture: ComponentFixture<ListQnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListQnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
