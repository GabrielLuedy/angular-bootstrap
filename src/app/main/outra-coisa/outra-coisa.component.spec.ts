import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutraCoisaComponent } from './outra-coisa.component';

describe('OutraCoisaComponent', () => {
  let component: OutraCoisaComponent;
  let fixture: ComponentFixture<OutraCoisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutraCoisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutraCoisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
