import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdcfComponent } from './bdcf.component';

describe('BdcfComponent', () => {
  let component: BdcfComponent;
  let fixture: ComponentFixture<BdcfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdcfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
