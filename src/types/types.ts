export enum Status {
  dead = 'Dead',
  alive = 'Alive',
  unknown = 'unknown',
}

export enum Gender {
  female = 'Female',
  male = 'Male',
  genderless = 'Genderless',
  unknown = 'unknown',
}

export interface ICharacter {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: any;
  location: any;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IPaginationInfo {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
}
