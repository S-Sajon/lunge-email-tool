export const EmailTemplateInfos: {
  [key: string]: { name: string; subject: string };
} = {
  PatientSignup: {
    name: 'PatientSignupTemplate',
    subject: 'Confirm your Lunge Zürich account',
  },
  DoctorSignup: {
    name: 'DoctorSignupTemplate',
    subject: 'Confirm your Lunge Zürich account',
  },
  PatientFourDayBeforeReminder: {
    name: 'PatientFourDayBeforeReminderTemplate',
    subject: 'Appointment reminder',
  },
  PatientWarningReminder: {
    name: 'PatientWarningReminderTemplate',
    subject: 'Reminder to confirm appointment',
  },
  RecoverAccount: {
    name: 'RecoverAccount',
    subject: 'Reset your password',
  },
  PatientOneDayBeforeReminder: {
    name: 'PatientOneDayBeforeReminderTemplate',
    subject: 'Appointment reminder',
  },
  PatientAcknowledgement: {
    name: 'PatientAcknowledgementTemplate',
    subject: 'Appointment request received',
  },
  AskPatientForConfirmation: {
    name: 'AskPatientForConfirmationTemplate',
    subject: 'Appointment request confirmed',
  },
  PatientConfirmation: {
    name: 'PatientConfirmationTemplate',
    subject: 'Appointment request confirmed',
  },
  CancellationAppointmentPatient: {
    name: 'CancellationEmailPatient',
    subject: 'Appointment cancelled',
  },
  BookingUpdatedEmailPatient: {
    name: 'BookingUpdatedEmailPatient',
    subject: 'Appointment details updated',
  },
  DoctorSavedPrescription: {
    name: 'DoctorSavedPrescriptionTemplate',
    subject: 'Prescription recorded',
  },
  EventCreated: { name: 'EventCreatedTemplate', subject: 'Event invitation' },
  EventUpdated: { name: 'EventUpdatedTemplate', subject: 'Event updated' },
  EventDeleted: { name: 'EventDeletedTemplate', subject: 'Event cancelled' },
  '2FAViaEmail': {
    name: '2FAViaEmail',
    subject: 'Two-Factor Authentication Code',
  },
  PatientSavedPrescription: {
    name: 'PatientSavedPrescriptionTemplate',
    subject: 'Appointment request received',
  },
  PatientRescheduleForNoResponse: {
    name: 'PatientRescheduleForNoResponseTemplate',
    subject: 'Appointment rescheduled',
  },
  GeneralMail: {
    name: 'GeneralMailTemplate',
    subject: '{{generalTemplateSubject}}',
  },
};
