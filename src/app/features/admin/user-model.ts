export interface UserModel {
  accessAdmin: boolean;
  active: boolean;
  address1: string;
  address2: string;
  admin: boolean;
  city: string;
  clipboardOnly: boolean;
  customSort: string;
  customURL: string;
  defaultViewer: string;
  displayName: string;
  email: string;
  extendedProperties: {
    totalCount: number;
    collection: any[];
  };
  fax: string;
  fbguid: string;
  forcePassword: boolean;
  formsOnly: boolean;
  groupId: number;
  groups: {
    totalCount: number;
    collection: any[];
  };
  hidden: boolean;
  id: number;
  includeGroupsAndProjects: boolean;
  location: number;
  name: string;
  objectType: number;
  outOfOffice: boolean;
  password: string;
  passwordDate: string;
  passwordExpires: string;
  passwordModified: string;
  phone: string;
  projectId: number;
  projects: {
    totalCount: number;
    collection: any[];
  };
  resetPasswordExpires: boolean;
  routedItems: {
    totalCount: number;
    collection: any[];
  };
  startScreen: number;
  state: string;
  status: number;
  syncFlag: number;
  timeZone: number;
  userId: number;
  viewerContext: number;
  website: string;
  zip: string;
  totalCount: number;
  custom1: string;
  custom2: string;
  custom3: string;
  custom4: string;
  custom5: string;
  custom6: string;
  delegateUserID: number;
}
