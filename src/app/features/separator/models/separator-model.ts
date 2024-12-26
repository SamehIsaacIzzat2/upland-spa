export interface SeparatorModel {
  aliasName: string;
  customSort: string;
  extendedProperties: {
    totalCount: number;
    collection: any[]; // Replace `any` with a specific type if known
  };
  groupId: number;
  id: number;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  objectType: number;
  originalName: string;
  projectId: number;
  required: boolean;
  separatorId: number;
  sepRelation: string;
  sortOrder: number;
  syncFlag: number;
  viewerContext: number;
  access: number;
  totalCount: number;
}
