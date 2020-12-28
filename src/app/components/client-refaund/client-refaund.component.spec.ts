import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRefaundComponent } from './client-refaund.component';

describe('ClientRefaundComponent', () => {
  let component: ClientRefaundComponent;
  let fixture: ComponentFixture<ClientRefaundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRefaundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRefaundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
