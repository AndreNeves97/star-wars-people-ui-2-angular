import { OrderByMode } from './order-by-mode.type';

export class OrderBy<T> {
  order_by_attr!: T | null;
  order_by_mode!: OrderByMode | null;

  constructor(order_by_attr: T | null, order_by_mode: OrderByMode | null) {
    this.order_by_attr = order_by_attr;
    this.order_by_mode = order_by_mode;
  }

  public static default<T>(): OrderBy<T> {
    return { order_by_attr: null, order_by_mode: null };
  }
}
