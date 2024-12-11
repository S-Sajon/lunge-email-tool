export interface IEmailTemplate {
  _id: string;
  CreateDate: string;
  CreatedBy: 'tadmin';
  Language: 'en-US' | 'de-DE';
  LastUpdateDate: string;
  LastUpdatedBy: 'tadmin';
  Tags: string[];
  TenantId: string;
  RolesAllowedToRead: ('Anonymous' | 'AppUser' | 'admin')[];
  IdsAllowedToRead: null;
  RolesAllowedToWrite: null;
  IdsAllowedToWrite: null;
  RolesAllowedToUpdate: null;
  IdsAllowedToUpdate: null;
  RolesAllowedToDelete: null;
  IdsAllowedToDelete: null;
  MailConfigurationId: string;
  Name: string;
  TemplateBody: string;
  TemplateSubject: string;
  GeneratedBy: 'CustomGenerator';
}
