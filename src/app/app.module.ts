import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PeopleListPageComponent } from './presenter/pages/people-list/people-list-page/people-list-page.component';
import { PeopleListTableComponent } from './presenter/pages/people-list/components/people-list-table/people-list-table.component';
import { PeopleListFilterComponent } from './presenter/pages/people-list/components/people-list-filter/people-list-filter.component';
import { PeopleListDisplayedFieldsComponent } from './presenter/pages/people-list/components/people-list-displayed-fields/people-list-displayed-fields.component';

@NgModule({
  declarations: [AppComponent, PeopleListPageComponent, PeopleListTableComponent, PeopleListFilterComponent, PeopleListDisplayedFieldsComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
