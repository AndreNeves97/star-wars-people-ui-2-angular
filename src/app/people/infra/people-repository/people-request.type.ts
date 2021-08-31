import { OrderBy } from 'src/app/core/order-by/order-by.type';
import { PeopleOrderableAttributes } from '../../domain/entities/people-sort-attributes.type';

export class PeopleRequest {
  created_start: Date | null;
  created_end: Date | null;
  skin_color: string | null;
  name: string | null;
  page: number;
  items_per_page: number = 10;
  order_by: OrderBy<PeopleOrderableAttributes>;

  constructor(
    created_start: Date | null,
    created_end: Date | null,
    skin_color: string | null,
    name: string | null,
    page: number,
    order_by: OrderBy<PeopleOrderableAttributes>
  ) {
    this.created_start = created_start;
    this.created_end = created_end;
    this.skin_color = skin_color;
    this.name = name;
    this.page = page;
    this.order_by = order_by;
  }
}
