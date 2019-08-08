import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxLivraisonsComponent } from './lieuxLivraisons.component';

describe('LieuxLivraisonsComponent', () => {
  let component: LieuxLivraisonsComponent;
  let fixture: ComponentFixture<LieuxLivraisonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuxLivraisonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuxLivraisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
