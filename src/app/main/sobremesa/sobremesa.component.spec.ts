import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremesaComponent } from './sobremesa.component';

describe('SobremesaComponent', () => {
  let component: SobremesaComponent;
  let fixture: ComponentFixture<SobremesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobremesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
