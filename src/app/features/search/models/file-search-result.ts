export interface FileSearchResult {
  taskId: number;
  fields: Field[];
  tasks: any[]; // Replace `any` with a specific type if you know the structure of tasks
  projectName: string;
  url: string;
  fileId: number;
  projectId: number;
}
export interface Field {
  number: number;
  name: string;
  value: string;
  showOnHomePage: boolean;
  showOnSearch: boolean;
}
