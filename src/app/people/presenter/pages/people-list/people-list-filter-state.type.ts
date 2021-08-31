export class PeopleListFilterState {
  created_start: Date | null;
  created_end: Date | null;
  skin_color: string | null;
  name: string | null;

  constructor(
    created_start: Date | null,
    created_end: Date | null,
    skin_color: string | null,
    name: string | null
  ) {
    this.created_start = created_start;
    this.created_end = created_end;
    this.skin_color = skin_color;
    this.name = name;
  }

  static default(): PeopleListFilterState {
    return {
      created_start: null,
      created_end: null,
      skin_color: null,
      name: null,
    };
  }
}
