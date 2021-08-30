import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListTableComponent } from './people-list-table.component';

describe('PeopleListTableComponent', () => {
  let component: PeopleListTableComponent;
  let fixture: ComponentFixture<PeopleListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
