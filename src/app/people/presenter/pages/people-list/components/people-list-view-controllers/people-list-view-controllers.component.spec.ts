import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListViewControllersComponent } from './people-list-view-controllers.component';

describe('PeopleListViewControllersComponent', () => {
  let component: PeopleListViewControllersComponent;
  let fixture: ComponentFixture<PeopleListViewControllersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleListViewControllersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListViewControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
