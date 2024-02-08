import {} from 'bson';
import { Timestamp } from 'mongodb';
export interface IEmailTemplate {
  _id: string;
  CreateDate: string;
  CreatedBy: 'tadmin';
  Language: 'en-US' | 'de-DE';
  LastUpdateDate: string;
  LastUpdatedBy: 'tadmin';
  Tags: string[];
  TenantId: 'CC790DD3-FEEF-4651-8F5E-A884494F9BA2';
  RolesAllowedToRead: ('Anonymous' | 'AppUser' | 'admin')[];
  IdsAllowedToRead: null;
  RolesAllowedToWrite: null;
  IdsAllowedToWrite: null;
  RolesAllowedToUpdate: null;
  IdsAllowedToUpdate: null;
  RolesAllowedToDelete: null;
  IdsAllowedToDelete: null;
  MailConfigurationId: '3190ff4c-4803-4ecb-a31f-fddcf86dc096';
  Name: string;
  TemplateBody: string;
  TemplateSubject: string;
  GeneratedBy: 'CustomGenerator';
}
