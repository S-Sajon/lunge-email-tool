export const EmailTemplateInfos: {
  [key: string]: { name: string; subject: string };
} = {
  PatientSignup: {
    name: 'PatientSignupTemplate',
    subject: 'Bestätigen Sie Ihr LUNGE ZÜRICH-Konto',
  },
  DoctorSignup: {
    name: 'DoctorSignupTemplate',
    subject: 'Bestätigen Sie Ihr LUNGE ZÜRICH-Konto',
  },
  PatientFourDayBeforeReminder: {
    name: 'PatientFourDayBeforeReminderTemplate',
    subject: 'Terminerinnerung',
  },
  PatientWarningReminder: {
    name: 'PatientWarningReminderTemplate',
    subject: 'Erinnerung zur Terminbestätigung',
  },
  RecoverAccount: {
    name: 'RecoverAccount',
    subject: 'Passwort zurücksetzen',
  },
  PatientOneDayBeforeReminder: {
    name: 'PatientOneDayBeforeReminderTemplate',
    subject: 'Terminerinnerung',
  },
  PatientAcknowledgement: {
    name: 'PatientAcknowledgementTemplate',
    subject: 'Terminanfrage erhalten',
  },
  AskPatientForConfirmation: {
    name: 'AskPatientForConfirmationTemplate',
    subject: 'Terminanfrage bestätigt',
  },
  PatientConfirmation: {
    name: 'PatientConfirmationTemplate',
    subject: 'Terminanfrage bestätigt',
  },
  CancellationAppointmentPatient: {
    name: 'CancellationEmailPatient',
    subject: 'Termin abgesagt',
  },
  BookingUpdatedEmailPatient: {
    name: 'BookingUpdatedEmailPatient',
    subject: 'Termindaten aktualisiert',
  },
  DoctorSavedPrescription: {
    name: 'DoctorSavedPrescriptionTemplate',
    subject: 'Verordnung erfasst',
  },
  EventCreated: {
    name: 'EventCreatedTemplate',
    subject: 'Einladung zur Sitzung',
  },
  EventUpdated: {
    name: 'EventUpdatedTemplate',
    subject: 'Aktualisierte Sitzung',
  },
  EventDeleted: {
    name: 'EventDeletedTemplate',
    subject: 'Veranstaltung abgesagt',
  },
  '2FAViaEmail': {
    name: '2FAViaEmail',
    subject: 'Zwei-Faktoren-Authentifizierungscode',
  },
  PatientSavedPrescription: {
    name: 'PatientSavedPrescriptionTemplate',
    subject: 'Terminanfrage erhalten',
  },
  PatientRescheduleForNoResponse: {
    name: 'PatientRescheduleForNoResponseTemplate',
    subject: 'Termin verschoben',
  },
  PatientRescheduleAppointment: {
    name: 'PatientRescheduleAppointment',
    subject: 'Termin verschoben',
  },
  ResendInvitationToBecomeUser: {
    name: 'ResendInvitationToBecomeUser',
    subject: 'Aktivieren Sie Ihr LUNGE ZÜRICH-Konto'
  },
  PatientRescheduleForToBeConfirmed: {
    name: 'PatientRescheduleForToBeConfirmedTemplate',
    subject: 'Termin verschoben'
  },
  GeneralMail: {
    name: 'GeneralMailTemplate',
    subject: '{{generalTemplateSubject}}',
  },
};
