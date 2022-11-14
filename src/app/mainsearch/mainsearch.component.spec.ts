import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsearchComponent } from './mainsearch.component';

describe('MainsearchComponent', () => {
  let component: MainsearchComponent;
  let fixture: ComponentFixture<MainsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
