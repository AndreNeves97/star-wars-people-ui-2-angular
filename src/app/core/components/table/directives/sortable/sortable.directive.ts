import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { OrderByMode } from 'src/app/core/order-by/order-by-mode.type';
import { OrderBy } from 'src/app/core/order-by/order-by.type';

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class SortableDirective {
  @Input() sortable!: string | null;
  @Input() direction!: OrderByMode | null;
  @Output() sort = new EventEmitter<OrderBy<string>>();

  rotate() {
    this.direction = this.getNewDirection();
    this.sort.emit({
      order_by_attr: this.sortable,
      order_by_mode: this.direction,
    });
  }

  getNewDirection(): OrderByMode | null {
    if (this.direction === OrderByMode.ASC) {
      return OrderByMode.DESC;
    }

    if (this.direction === OrderByMode.DESC) {
      return null;
    }

    return OrderByMode.ASC;
  }
}
