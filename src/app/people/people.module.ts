import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';

import { PeopleListPageComponent } from './presenter/pages/people-list/people-list-page/people-list-page.component';
import { PeopleListTableComponent } from './presenter/pages/people-list/components/people-list-table/people-list-table.component';
import { PeopleListFilterComponent } from './presenter/pages/people-list/components/people-list-filter/people-list-filter.component';
import { PeopleListDisplayedFieldsComponent } from './presenter/pages/people-list/components/people-list-displayed-fields/people-list-displayed-fields.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PeopleListPageComponent,
    PeopleListTableComponent,
    PeopleListFilterComponent,
    PeopleListDisplayedFieldsComponent,
  ],
  imports: [CommonModule, PeopleRoutingModule, NgbModule],
})
export class PeopleModule {}
