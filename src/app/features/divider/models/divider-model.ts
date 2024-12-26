export interface DividerModel {
  aliasName: string;
  customSort: string;
  dividerId: number;
  extendedProperties: {
    totalCount: number;
    collection: any[]; // Adjust `any` to the correct type if known
  };
  isDefault: boolean;
  id: number;
  masterSheet: boolean;
  masterSheetEntry: string;
  masterSheetFooter: string;
  masterSheetHeader: string;
  name: string;
  normalizedName: string;
  objectType: number;
  originalName: string;
  projectId: number;
  required: boolean;
  separator: string;
  sortOrder: number;
  status: number;
  syncFlag: number;
  viewerContext: number;
  access: number;
  totalCount: number;
}
