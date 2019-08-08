import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchandiseDetailComponent } from './marchandise-detail.component';

describe('MarchandiseDetailComponent', () => {
  let component: MarchandiseDetailComponent;
  let fixture: ComponentFixture<MarchandiseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchandiseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchandiseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
