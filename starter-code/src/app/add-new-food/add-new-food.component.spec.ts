import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFoodComponent } from './add-new-food.component';

describe('AddNewFoodComponent', () => {
  let component: AddNewFoodComponent;
  let fixture: ComponentFixture<AddNewFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
