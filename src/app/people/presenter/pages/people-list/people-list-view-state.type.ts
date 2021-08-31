import { OrderBy } from 'src/app/core/order-by/order-by.type';
import { PeopleDisplayAttributes } from 'src/app/people/domain/entities/people-display-attributes.type';
import { PeopleOrderableAttributes } from 'src/app/people/domain/entities/people-sort-attributes.type';

export class PeopleListViewState {
  page: number;
  order_by: OrderBy<PeopleOrderableAttributes>;
  display_attributes: PeopleDisplayAttributes;

  constructor(
    page: number,
    order_by: OrderBy<PeopleOrderableAttributes>,
    display_attributes: PeopleDisplayAttributes
  ) {
    this.page = page;
    this.order_by = order_by;
    this.display_attributes = display_attributes;
  }

  public static default(): PeopleListViewState {
    return {
      page: 0,
      order_by: OrderBy.default<PeopleOrderableAttributes>(),
      display_attributes: PeopleDisplayAttributes.default(),
    };
  }
}
