export const EmailTemplateInfos: {
  [key: string]: { name: string; subject: string };
} = {
  ApproveCleanUpRequest: {
    name: 'ApproveCleanUpRequest',
    subject: 'A cleanup request has been approved.',
  },
  RejectCleanUpRequest: {
    name: 'RejectCleanUpRequest',
    subject: 'A cleanup request has been rejected.',
  },
  ResentCleanUpRequest: {
    name: 'ResentCleanUpRequest',
    subject: 'A cleanup request has been resent.',
  },
};
