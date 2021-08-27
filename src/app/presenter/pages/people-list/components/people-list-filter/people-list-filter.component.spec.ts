import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListFilterComponent } from './people-list-filter.component';

describe('PeopleListFilterComponent', () => {
  let component: PeopleListFilterComponent;
  let fixture: ComponentFixture<PeopleListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleListFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
