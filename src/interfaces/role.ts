export interface Role {
  id: string;
  title: string;
  start: string;
  end?: string;
  description: string[];
  stack?: string[];
}
