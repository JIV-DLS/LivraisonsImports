import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchandiseListComponent } from './marchandise-list.component';

describe('MarchandiseListComponent', () => {
  let component: MarchandiseListComponent;
  let fixture: ComponentFixture<MarchandiseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchandiseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchandiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
