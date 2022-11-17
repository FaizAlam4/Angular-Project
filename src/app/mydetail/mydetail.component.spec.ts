import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydetailComponent } from './mydetail.component';

describe('MydetailComponent', () => {
  let component: MydetailComponent;
  let fixture: ComponentFixture<MydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
