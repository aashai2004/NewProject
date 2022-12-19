import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmxViewComponent } from './pmx-view.component';

describe('PmxViewComponent', () => {
  let component: PmxViewComponent;
  let fixture: ComponentFixture<PmxViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmxViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
