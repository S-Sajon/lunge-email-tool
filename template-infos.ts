export const EmailTemplateInfos: {
  [key: string]: { name: string; subject: string };
} = {
  PatientSignup: {
    name: 'PatientSignupTemplate',
    subject:
      'Bestätigen Sie Ihr LUNGE ZÜRICH-Konto / Confirm your Lunge Zürich account',
  },
  DoctorSignup: {
    name: 'DoctorSignupTemplate',
    subject:
      'Bestätigen Sie Ihr LUNGE ZÜRICH-Konto / Confirm your Lunge Zürich account',
  },
  PatientFourDayBeforeReminder: {
    name: 'PatientFourDayBeforeReminderTemplate',
    subject: 'Terminerinnerung / Appointment reminder',
  },
  PatientWarningReminder: {
    name: 'PatientWarningReminderTemplate',
    subject:
      'Erinnerung zur Terminbestätigung / Reminder to confirm appointment',
  },
  RecoverAccount: {
    name: 'RecoverAccount',
    subject: 'Passwort zurücksetzen / Reset your password',
  },
  PatientOneDayBeforeReminder: {
    name: 'PatientOneDayBeforeReminderTemplate',
    subject: 'Terminerinnerung / Appointment reminder',
  },
  PatientAcknowledgement: {
    name: 'PatientAcknowledgementTemplate',
    subject: 'Terminanfrage erhalten / Appointment request received',
  },
  AskPatientForConfirmation: {
    name: 'AskPatientForConfirmationTemplate',
    subject: 'Terminanfrage bestätigt / Appointment request confirmed',
  },
  PatientConfirmation: {
    name: 'PatientConfirmationTemplate',
    subject: 'Terminanfrage bestätigt / Appointment request confirmed',
  },
  CancellationAppointmentPatient: {
    name: 'CancellationEmailPatient',
    subject: 'Termin abgesagt / Appointment cancelled',
  },
  BookingUpdatedEmailPatient: {
    name: 'BookingUpdatedEmailPatient',
    subject: 'Termindaten aktualisiert / Appointment details updated',
  },
  DoctorSavedPrescription: {
    name: 'DoctorSavedPrescriptionTemplate',
    subject: 'Verordnung erfasst / Prescription recorded',
  },
  EventCreated: {
    name: 'EventCreatedTemplate',
    subject: 'Einladung zur Sitzung / Event invitation',
  },
  EventUpdated: {
    name: 'EventUpdatedTemplate',
    subject: 'Aktualisierte Sitzung / Event updated',
  },
  EventDeleted: {
    name: 'EventDeletedTemplate',
    subject: 'Veranstaltung abgesagt / Event cancelled',
  },
  '2FAViaEmail': {
    name: '2FAViaEmail',
    subject:
      'Zwei-Faktoren-Authentifizierungscode / Two-Factor Authentication Code',
  },
  PatientSavedPrescription: {
    name: 'PatientSavedPrescriptionTemplate',
    subject: 'Terminanfrage erhalten / Appointment request received',
  },
  PatientRescheduleForNoResponse: {
    name: 'PatientRescheduleForNoResponseTemplate',
    subject: 'Termin verschoben / Appointment rescheduled',
  },
  GeneralMail: {
    name: 'GeneralMailTemplate',
    subject: '{{generalTemplateSubject}}',
  },
};
