import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpStorageComponent } from './gmp-storage.component';

describe('GmpStorageComponent', () => {
  let component: GmpStorageComponent;
  let fixture: ComponentFixture<GmpStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
