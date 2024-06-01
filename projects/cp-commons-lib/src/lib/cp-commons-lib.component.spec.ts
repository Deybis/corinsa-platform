import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpCommonsLibComponent } from './cp-commons-lib.component';

describe('CpCommonsLibComponent', () => {
  let component: CpCommonsLibComponent;
  let fixture: ComponentFixture<CpCommonsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpCommonsLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpCommonsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
