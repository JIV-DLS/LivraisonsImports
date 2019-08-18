import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteAddComponent } from './societe-add.component';

describe('SocieteAddComponent', () => {
  let component: SocieteAddComponent;
  let fixture: ComponentFixture<SocieteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocieteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
