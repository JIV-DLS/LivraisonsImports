import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildersComponent } from './adresses.component';

describe('BuildersComponent', () => {
  let component: BuildersComponent;
  let fixture: ComponentFixture<BuildersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
