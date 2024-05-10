import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeConcatSwitchExhaustedComponent } from './merge-concat-switch-exhausted.component';

describe('MergeConcatSwitchExhaustedComponent', () => {
  let component: MergeConcatSwitchExhaustedComponent;
  let fixture: ComponentFixture<MergeConcatSwitchExhaustedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergeConcatSwitchExhaustedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MergeConcatSwitchExhaustedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
