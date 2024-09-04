export interface Column {
  field: string;
  header: string;
}

export interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

export interface TableHeader {
  field: string;
  header: string;
}

export interface TableSelectEvent {
  event: MouseEvent;
  data: object;
}

export type TableStatus = Record<
  string,
  {
    severity:
      | 'success'
      | 'secondary'
      | 'info'
      | 'warning'
      | 'danger'
      | 'contrast'
      | undefined;
    icon: string;
  }
>;

export interface NodeListItem {
  name: string;
  path: string;
  icon: string;
}
