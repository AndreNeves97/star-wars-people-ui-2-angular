import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListPageComponent } from './presenter/pages/people-list/people-list-page/people-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
