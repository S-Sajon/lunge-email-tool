import { minify } from 'html-minifier';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { format } from 'prettier';
import { v4 as uuid } from 'uuid';
import { IEmailTemplate } from './EmailTemplate.interface';
import { EmailTemplateInfos } from './template-infos';

// BSON.serialize()

const allEmailData: string[] = [];

const promisesToExhaust: Promise<string>[] = [];

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
    })
      .replaceAll('"', '"')
      .replaceAll("'", "'");
    const currTime = new Date().toISOString();
    for (let lang of ['en-US', 'de-DE'] as const) {
      const emailDataObj: IEmailTemplate = {
        _id: uuid(),
        Language: lang,
        CreateDate: currTime,
        LastUpdateDate: currTime,
        Name: val.name,
        Tags: ['public', 'is-A-' + val.name],
        TemplateBody: minifiedEscapedHtml,
        TemplateSubject: val.subject,
        CreatedBy: 'tadmin',
        GeneratedBy: 'CustomGenerator',
        LastUpdatedBy: 'tadmin',
        MailConfigurationId: '3190ff4c-4803-4ecb-a31f-fddcf86dc096',
        IdsAllowedToRead: null,
        RolesAllowedToWrite: null,
        IdsAllowedToWrite: null,
        RolesAllowedToUpdate: null,
        IdsAllowedToUpdate: null,
        RolesAllowedToDelete: null,
        IdsAllowedToDelete: null,
        RolesAllowedToRead: ['Anonymous', 'AppUser', 'admin'],
        TenantId: 'CC790DD3-FEEF-4651-8F5E-A884494F9BA2',
      };
      promisesToExhaust.push(convertToBsonString(emailDataObj));
    }
  }
});

Promise.all(promisesToExhaust).then((values) => {
  writeFileSync('./dist/output.json', values.join('\n'));
});

async function convertToBsonString(obj: IEmailTemplate) {
  const formated = await format(JSON.stringify(obj), {
    endOfLine: 'lf',
    parser: 'json',
  });
  const currTime = new Date().toISOString();
  return formated
    .replace(/"CreateDate": .+,/, `"CreateDate": ISODate("${currTime}"),`)
    .replace(
      /"LastUpdateDate": .+,/,
      `"LastUpdateDate": ISODate("${currTime}"),`
    );
}
