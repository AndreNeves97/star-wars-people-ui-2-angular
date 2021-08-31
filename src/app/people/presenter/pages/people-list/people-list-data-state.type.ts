import { OrderBy } from 'src/app/core/order-by/order-by.type';
import { PeopleDisplayAttributes } from 'src/app/people/domain/entities/people-display-attributes.type';
import { PeopleOrderableAttributes } from 'src/app/people/domain/entities/people-sort-attributes.type';
import { People } from 'src/app/people/domain/entities/people.type';

export class PeopleListDataState {
  has_error: boolean;
  is_loading: boolean;
  data: People[];

  constructor(has_error: boolean, is_loading: boolean, data: People[]) {
    this.has_error = has_error;
    this.is_loading = is_loading;
    this.data = data;
  }

  public static loading(): PeopleListDataState {
    return {
      has_error: false,
      is_loading: true,
      data: [],
    };
  }

  public static error(): PeopleListDataState {
    return {
      has_error: true,
      is_loading: false,
      data: [],
    };
  }

  public static success(data: People[]): PeopleListDataState {
    return {
      has_error: false,
      is_loading: false,
      data,
    };
  }
}
