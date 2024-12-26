interface Dividers {
  totalCount: number;
  collection: any[]; // Adjust the type depending on the structure of the collection items
}

interface ExtendedProperties {
  totalCount: number;
  collection: any[]; // Adjust the type depending on the structure of the collection items
}

interface Fields {
  totalCount: number;
  collection: any[]; // Adjust the type depending on the structure of the collection items
}

interface Files {
  totalCount: number;
  collection: any[]; // Adjust the type depending on the structure of the collection items
}

interface Separators {
  totalCount: number;
  collection: any[]; // Adjust the type depending on the structure of the collection items
}

export interface ProjectModel {
  adminOnly: boolean;
  allowManualDeclaration: number;
  allowUnsign: boolean;
  customSort: string;
  batchEmails: string;
  dividerLabel: string;
  dividers: Dividers;
  docuSignEnabled: boolean;
  enableBoxes: boolean;
  enableCAR: boolean;
  enableDividerMemory: boolean;
  enableDividerSecurity: boolean;
  enableFBDrive: boolean;
  enableFieldSecurity: boolean;
  enableFileTracking: boolean;
  enableFullText: boolean;
  enableInteractiveRevisions: boolean;
  enableManualDividerEntry: boolean;
  enableManualSeparatorEntry: boolean;
  enableMultiKeySearch: boolean;
  enableRevisions: boolean;
  enableSeparatorMemory: boolean;
  enableSeparators: boolean;
  enableSeparatorSecurity: boolean;
  enableTaskManager: boolean;
  enableWFQueueSelection: boolean;
  extendedProperties: ExtendedProperties;
  fbDriveShowAllSeparatorsAndDividers: boolean;
  fields: Fields;
  files: Files;
  fileRoomEmails: string;
  groupId: number;
  hidden: boolean;
  id: number;
  imaging: boolean;
  keyField: number;
  keyVisualField: number;
  lastUpdated: string;
  lastUpdatedBy: number;
  lockingRights: number;
  name: string;
  newDocRoute: number;
  newDocRouteAction: number;
  numRevisions: number;
  projectId: number;
  rememberBox: boolean;
  remoteId: number;
  renditionAction: number;
  renditionMaximumDimension: number;
  renditionPerformed: number;
  reportViewer: boolean;
  requireBox: boolean;
  saveStyle: number;
  searchPortalSecurityMode: number;
  separators: Separators;
  separatorLabel: string;
  subDividerLabel: string;
  serverId: number;
  serverOCRSkipExtensions: string;
  serverOCRType: number;
  showChangeDate: boolean;
  sortDividers: number;
  sortSeparators: number;
  status: number;
  projectType: string;
  types: string[];
  userId: number;
  visibleOnly: boolean;
  wfShowAssignedBy: boolean;
  wfShowBatchDate: boolean;
  wfShowDivider: boolean;
  wfShowDueDate: boolean;
  wfShowStartDate: boolean;
  enableAdhocRouting: boolean;
  shareDocumentsExternally: boolean;
  enableAddContent: boolean;
  enableSingleFileViewing: boolean;
  dividerRequired: boolean;
  separatorRequired: boolean;
  projectSearchFormat: number;
  documentExportFormat: string;
  includeLineItemSearch: boolean;
  totalFileCount: number;
  syncFlag: number;
  viewerContext: number;
  totalCount: number;
  objectType: number;
}
