import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputJemaatComponent } from './input-jemaat.component';

describe('InputJemaatComponent', () => {
  let component: InputJemaatComponent;
  let fixture: ComponentFixture<InputJemaatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputJemaatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputJemaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
