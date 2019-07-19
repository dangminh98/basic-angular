import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtvComponent } from './ctv.component';

describe('CtvComponent', () => {
  let component: CtvComponent;
  let fixture: ComponentFixture<CtvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
