/**
 * TODO: Clean mockdata so that the tests are more readable.
 */
export const studyfields = [
  {
    name: "Studyfield 1",
    isActive: true,
    id: 1,
  },
  {
    name: "Studyfield 2",
    isActive: false,
    id: 2,
  },
];

export const emailDrafts = [
  {
    id: 1,
    title: "Otsikko",
    body: "Sisältö",
    type: "tosiSuomalainenDraft",
  },
  {
    id: 2,
    title: "Title",
    body: "Body",
    type: "reallyEnglishDraft",
  },
];

//Some tests might break if they're run after some of the dates here, 
//first 2 are supposed to be upcoming and last 2 are past dates
export const councilmeetings = [
  {
    id: 1,
    date: "2099-08-29T20:59:59.000Z",
    instructorDeadline: "2099-08-21T20:59:59.000Z",
    studentDeadline: "2099-08-23T20:59:59.000Z",
  },
  {
    id: 2,
    date: "2088-08-29T20:59:59.000Z",
    instructorDeadline: "2088-08-21T20:59:59.000Z",
    studentDeadline: "2088-08-23T20:59:59.000Z",

  },
  {
    id: 3,
    date: "2011-08-29T20:59:59.000Z",
    instructorDeadline: "2011-08-21T20:59:59.000Z",
    studentDeadline: "2011-08-23T20:59:59.000Z",
  },
  {
    id: 1,
    date: "2001-08-29T20:59:59.000Z",
    instructorDeadline: "2001-08-21T20:59:59.000Z",
    studentDeadline: "2001-08-23T20:59:59.000Z",
  }
];

export const users = [
  {
    id: 1,
    firstname: "firstnameadmin",
    lastname: "lastnameadmin",
    password: "asdf",
    email: "admin@admin.com",
    role: "admin",
    isActive: true,
    StudyFieldId: null,
  },
  {
    id: 2,
    firstname: "firstnameprofessor",
    lastname: "lastnameprofessor",
    password: "asdf",
    email: "professor@professor.com",
    role: "professor",
    isActive: true,
    StudyFieldId: null,
  },
  {
    id: 3,
    firstname: "firstnameprintperson",
    lastname: "lastnameprintperson",
    password: "asdf",
    email: "printperson@printperson.com",
    role: "print-person",
    isActive: true,
    StudyFieldId: null,
  },
  {
    id: 4,
    firstname: "firstnameinstructor",
    lastname: "lastnameinstructor",
    password: "asdf",
    email: "instructor@instructor.com",
    role: "instructor",
    isActive: true,
    StudyFieldId: null,
  },
  {
    id: 5,
    firstname: "firstnamenotactiveprof",
    lastname: "firstnamenotactiveprof",
    password: "asdf",
    email: "notactiveprof@notactiveprof.com",
    role: "professor",
    isActive: false,
    StudyFieldId: null,
  },
  {
    id: 5,
    firstname: "firstnamenotactiveprintp",
    lastname: "firstnamenotactiveprintp",
    password: "asdf",
    email: "notactiveprintp@notactiveprintp.com",
    role: "print-person",
    isActive: false,
    StudyFieldId: null,
  },
];

export const notActivatedUsers = users.filter(user => user.isActive === false);
export const activatedUsers = users.filter(user => user.isActive === true);

export const thesisProgresses = [
  {
    id: 1,
    EthesisReminder: emailDrafts[0],
    EthesisReminderId: emailDrafts[0].id,
    GraderEvalReminder: emailDrafts[1],
    GraderEvalReminderId: emailDrafts[1].id,
    PrintReminder: null,
    PrintReminderId: null,
    StudentRegistrationNotification: null,
    StudentRegistrationNotificationId: null,
    SupervisingProfessorNotification: null,
    SupervisingProfessorNotificationId: null,
    ThesisId: 65,
    createdAt: "2017-06-14T08:56:50.025Z",
    ethesisDone: true,
    graderEvalDone: false,
    printDone: false,
    studentNotificationSent: false,
  },
  {
    id: 2,
    EthesisReminder: emailDrafts[0],
    EthesisReminderId: emailDrafts[0].id,
    GraderEvalReminder: null,
    GraderEvalReminderId: null,
    PrintReminder: null,
    PrintReminderId: null,
    StudentRegistrationNotification: emailDrafts[1],
    StudentRegistrationNotificationId: emailDrafts[1].id,
    SupervisingProfessorNotification: null,
    SupervisingProfessorNotificationId: null,
    ThesisId: 65,
    createdAt: "2017-06-14T08:56:50.025Z",
    ethesisDone: true,
    graderEvalDone: false,
    printDone: false,
    studentNotificationSent: true,
  }
];

export const theses = [
  {
    id: 1,
    authorEmail: "mikko@mattila.com",
    authorFirstname: "Mikko",
    authorLastname: "Mattola",
    grade: "Cum Laude Approbatur",
    graderEval: null,
    regreq: false,
    title: "Eka gradu",
    urkund: "https://secure.urkund.com",
    CouncilMeeting: councilmeetings[0],
    CouncilMeetingId: councilmeetings[0].id,
    Graders: [users[1], users[2], users[3]],
    StudyField: studyfields[0],
    StudyFieldId: studyfields[0].id,
    ThesisProgress: thesisProgresses[0],
    User: users[0],
    UserId: users[0].id,
  },
  {
    id: 2,
    authorEmail: "mikko@mattila.com",
    authorFirstname: "Mikko",
    authorLastname: "Mattola",
    grade: "Approbatur",
    graderEval: null,
    regreq: false,
    title: "Toka gradu",
    urkund: "https://secure.urkund.com",
    CouncilMeeting: councilmeetings[0],
    CouncilMeetingId: councilmeetings[0].id,
    Graders: [users[0], users[2], users[3]],
    StudyField: studyfields[0],
    StudyFieldId: studyfields[0].id,
    ThesisProgress: thesisProgresses[0],
    User: users[1],
    UserId: users[1].id,
  },
  {
    id: 3,
    authorEmail: "mikko@mattila.com",
    authorFirstname: "Mikko",
    authorLastname: "Mattola",
    grade: "Laudatur",
    graderEval: null,
    regreq: false,
    title: "Kolmas gradu",
    urkund: "https://secure.urkund.com",
    CouncilMeeting: councilmeetings[1],
    CouncilMeetingId: councilmeetings[1].id,
    Graders: [users[0], users[1], users[3]],
    StudyField: studyfields[0],
    StudyFieldId: studyfields[0].id,
    ThesisProgress: thesisProgresses[0],
    User: users[2],
    UserId: users[2].id,
  }
];

export const loggedInUsers = [
  {
    id: 1,
    name: "Kjell Lemström",
    email: "ohtugrappa@gmail.com",
    role: "admin",
    StudyFieldId: null,
  },
  {
    id: 2,
    name: "B Virtanen",
    email: "ohtugrappa2@gmail.com",
    role: "print-person",
    StudyFieldId: null,
  },
];

export const tokens = [
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoxLCJyb2xlIjoiYWRtaW4iLCJTdHVkeUZpZWxkSWQiOm51bGx9LCJjcmVhdGVkIjoiMjAxNi0wNS0xMVQxODowMDo0MC40NzJaIiwiZXhwaXJlcyI6MTQ2Mjk4OTY0MDQ3Mn0.fAr3zUXgirdQT3YpVQa2DkLZR-4i1E2TJl-UOYGH0RE",
];
