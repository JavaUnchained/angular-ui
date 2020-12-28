import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RationListComponent } from './ration-list.component';

describe('RationListComponent', () => {
  let component: RationListComponent;
  let fixture: ComponentFixture<RationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
