import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderationsComponent } from './considerations.component';

describe('ConsiderationsComponent', () => {
  let component: ConsiderationsComponent;
  let fixture: ComponentFixture<ConsiderationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsiderationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsiderationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
