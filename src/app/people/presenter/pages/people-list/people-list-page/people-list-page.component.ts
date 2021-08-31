import { Component, OnInit } from '@angular/core';
import { PeopleListController } from '../people-list.controller';

@Component({
  selector: 'app-people-list-page',
  templateUrl: './people-list-page.component.html',
  styleUrls: ['./people-list-page.component.scss'],
})
export class PeopleListPageComponent implements OnInit {
  constructor(private controller: PeopleListController) {
    controller.load();
  }

  ngOnInit(): void {}
}
