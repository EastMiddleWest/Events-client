export type MyEvent = {
  _id: string;
  title: string;
  description: string;
  date: string;
  organizer: string;
  participants: Participant[]
}

export type Participant = {
  _id: string;
  fullName: string;
  email: string;
  dateOfBirth: string;
  registartionDate: string;
  source: string;
}
