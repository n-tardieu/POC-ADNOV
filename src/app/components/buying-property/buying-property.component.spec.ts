import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingPropertyComponent } from './buying-property.component';

describe('BuyingPropertyComponent', () => {
  let component: BuyingPropertyComponent;
  let fixture: ComponentFixture<BuyingPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
