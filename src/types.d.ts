export interface Project {
  id: number;
  demos: {
    laptop?: string;
    mobile?: string;
  };
  description: string;
  livePath?: string;
  title: string;
}
