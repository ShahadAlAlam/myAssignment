import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationsComponent } from './housing-locations.component';

describe('HousingLocationsComponent', () => {
  let component: HousingLocationsComponent;
  let fixture: ComponentFixture<HousingLocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HousingLocationsComponent]
    });
    fixture = TestBed.createComponent(HousingLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
