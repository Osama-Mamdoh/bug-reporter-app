import { Bug } from './bug';

export interface SearchResult {
  bugs: Bug[];
  total: number;
}

export interface State {
  page: number;
  pageSize: number;
  searchKeyword: string;
}
