import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RationFormComponent } from './ration-form.component';

describe('RationFormComponent', () => {
  let component: RationFormComponent;
  let fixture: ComponentFixture<RationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
