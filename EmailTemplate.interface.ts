export interface IEmailTemplate {
  _id: string;
  CreateDate: Date;
  CreatedBy: string;
  Language: 'en-US' | 'de-DE' | 'es-ES';
  LastUpdateDate: Date;
  LastUpdatedBy: string;
  Tags: string[];
  TenantId: string;
  RolesAllowedToRead:
    | ('Anonymous' | 'AppUser' | 'ovb_admin' | 'ovb_customer' | 'ovb_admin')[]
    | null;
  IdsAllowedToRead: null;
  RolesAllowedToWrite: null;
  IdsAllowedToWrite: null;
  RolesAllowedToUpdate: null;
  IdsAllowedToUpdate: null;
  RolesAllowedToDelete: null;
  IdsAllowedToDelete: null;
  MailConfigurationId: string | null;
  Name: string;
  TemplateBody: string;
  TemplateSubject: string;
  GeneratedBy: 'CustomGenerator';
}
