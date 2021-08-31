export class PeopleDisplayAttributes {
  values: PeopleDisplayAttributesMap;

  constructor(values: PeopleDisplayAttributesMap) {
    this.values = values;
  }

  public static default(): PeopleDisplayAttributes {
    return {
      values: {
        name: true,
        height: true,
        mass: true,
        hair_color: true,
        skin_color: true,
        eye_color: true,
        birth_year: true,
        gender: true,
        created: true,
      },
    };
  }
}

export enum PeopleAvailableDisplayAttributes {
  NAME = 'name',
  HEIGHT = 'height',
  MASS = 'mass',
  HAIR_COLOR = 'hair_color',
  SKIN_COLOR = 'skin_color',
  EYE_COLOR = 'eye_color',
  BIRTH_YEAR = 'birth_year',
  GENDER = 'gender',
  CREATED = 'created',
}

export type PeopleDisplayAttributesMap = {
  [attribute in PeopleAvailableDisplayAttributes]: boolean;
};
