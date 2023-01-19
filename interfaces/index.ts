export interface IRoute {
  path: string;
  page: () => void;
}

export interface ICar {
  id: number;
  name: string;
  color: string;
}

