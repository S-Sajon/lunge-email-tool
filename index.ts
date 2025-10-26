import { minify } from 'html-minifier';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { format } from 'prettier';
import { v4 as uuid } from 'uuid';
import { IEmailTemplate } from './EmailTemplate.interface';
import { EmailTemplateInfos } from './template-infos';
import { Document, EJSON } from 'bson';

const OVBTenantId = 'F4C03AA9-7396-438F-828C-958CDBF03E6D';

const allEmailData: string[] = [];

const promisesToExhaust: Document[] = [];

if (!existsSync('./dist/')) {
  mkdirSync('./dist', { recursive: true });
}

Object.entries(EmailTemplateInfos).forEach(async ([key, val]) => {
  const currFilePath = `./src_html/${key}.html`;
  if (existsSync(currFilePath)) {
    const file = readFileSync(currFilePath, 'utf-8');
    const minifiedEscapedHtml = minify(file, {
      removeComments: true,
      sortAttributes: true,
      sortClassName: true,
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeEmptyAttributes: true,
      minifyCSS: true,
    });
    const currTime = new Date();
    for (let lang of ['en-US', 'de-DE', 'es-ES'] as const) {
      const emailDataObj: IEmailTemplate = {
        _id: uuid(),
        Language: lang,
        CreateDate: currTime,
        LastUpdateDate: currTime,
        Name: val.name,
        Tags: ['public', 'is-A-' + val.name],
        TemplateBody: minifiedEscapedHtml,
        TemplateSubject: val.subject,
        CreatedBy: 'Sajon',
        GeneratedBy: 'CustomGenerator',
        LastUpdatedBy: 'Sajon',
        MailConfigurationId: null,
        IdsAllowedToRead: null,
        RolesAllowedToWrite: null,
        IdsAllowedToWrite: null,
        RolesAllowedToUpdate: null,
        IdsAllowedToUpdate: null,
        RolesAllowedToDelete: null,
        IdsAllowedToDelete: null,
        RolesAllowedToRead: null,
        TenantId: OVBTenantId,
      };
      promisesToExhaust.push(EJSON.serialize(emailDataObj));
    }
  }
});

Promise.all(promisesToExhaust)
  .then((values) => {
    writeFileSync('./dist/output.json', JSON.stringify(values));
  })
  .catch((err) => {
    console.log(err);
  });
