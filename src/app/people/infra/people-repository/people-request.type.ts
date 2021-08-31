import { OrderBy } from 'src/app/core/order-by/order-by.type';
import { PeopleOrderableAttributes } from '../../domain/entities/people-sort-attributes.type';

export class PeopleRequest {
  page: number;
  created_start: Date;
  created_end: Date;
  skin_color: string;
  name: string;
  order_by: OrderBy<PeopleOrderableAttributes>;

  constructor(
    page: number,
    created_start: Date,
    created_end: Date,
    skin_color: string,
    name: string,
    order_by: OrderBy<PeopleOrderableAttributes>
  ) {
    this.page = page;
    this.created_start = created_start;
    this.created_end = created_end;
    this.skin_color = skin_color;
    this.name = name;
    this.order_by = order_by;
  }
}
