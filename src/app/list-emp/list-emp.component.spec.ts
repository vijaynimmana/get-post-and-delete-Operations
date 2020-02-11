import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpComponent } from './list-emp.component';

describe('ListEmpComponent', () => {
  let component: ListEmpComponent;
  let fixture: ComponentFixture<ListEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
