import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriotionComponent } from './product-descriotion.component';

describe('ProductDescriotionComponent', () => {
  let component: ProductDescriotionComponent;
  let fixture: ComponentFixture<ProductDescriotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDescriotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDescriotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
