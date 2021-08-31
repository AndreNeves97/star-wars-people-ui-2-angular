import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';

import { PeopleListPageComponent } from './presenter/pages/people-list/people-list-page/people-list-page.component';
import { PeopleListTableComponent } from './presenter/pages/people-list/components/people-list-table/people-list-table.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PeopleListViewControllersComponent } from './presenter/pages/people-list/components/people-list-view-controllers/people-list-view-controllers.component';

@NgModule({
  declarations: [
    PeopleListPageComponent,
    PeopleListTableComponent,
    PeopleListViewControllersComponent,
  ],
  imports: [CommonModule, PeopleRoutingModule, NgbModule],
})
export class PeopleModule {}
