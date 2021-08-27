import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListDisplayedFieldsComponent } from './people-list-displayed-fields.component';

describe('PeopleListDisplayedFieldsComponent', () => {
  let component: PeopleListDisplayedFieldsComponent;
  let fixture: ComponentFixture<PeopleListDisplayedFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleListDisplayedFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListDisplayedFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
