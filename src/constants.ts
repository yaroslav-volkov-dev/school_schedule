import {
  Schedule,
  SchoolDaySchedule,
  SchoolWeekSchedule,
  Subject,
  Teacher,
  TeacherWorkingSchedule,
  WorkingDaySchedule
} from './commonTypes/dataTypes';

export const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'] as const;
export const classes = ['5A', '5B', '5C', '6A', '6B', '6C', '7A', '7B', '7C', '8A', '8B', '8C', '9A', '9B', '9C', '10A', '10B', '10C'] as const;

export const classRooms = [
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
  201, 202, 203, 204, 205, 206, 207, 208, 209, 210,
  301, 302, 303, 304, 305, 306, 307, 308, 309, 310,
  401, 402, 403, 404, 405, 406, 407, 408, 409, 410,
];

export const subjects: Subject[] = [
  {
    id: 'ukr-mova',
    name: 'Ukrainian language'
  },
  {
    id: 'ukr-lit',
    name: 'Ukrainian literature'
  },
  {
    id: 'matematika',
    name: 'Math',
  },
  {
    id: 'geometria',
    name: 'Geometry'
  },
  {
    id: 'trigonometria',
    name: 'Trigonometry'
  },
  {
    id: 'fizra',
    name: 'Physical culture'
  },
  {
    id: 'trudy',
    name: 'Labor education'
  },
  {
    id: 'biologia',
    name: 'Biology',
  },
  {
    id: 'geografia',
    name: 'Geography'
  },
  {
    id: 'malyuvannya',
    name: 'Drawing',
  },
  {
    id: 'muzyka',
    name: 'Music art'
  }
];

export const defaultWorkingDaySchedule: WorkingDaySchedule = ['free', 'free', 'free', 'free', 'free', 'free', 'free'];

const createDefaultSchedule = (): TeacherWorkingSchedule => {
  return days.reduce<TeacherWorkingSchedule>((acc, day) => {
    acc[day] = defaultWorkingDaySchedule;
    return acc;
  }, {} as TeacherWorkingSchedule);
};


export const teachers: Teacher[] = [
  {
    id: 'vasya',
    name: 'Vasya',
    subjects: ['urk-mova', 'ukr-lit'],
    workingSchedule: createDefaultSchedule(),
  },
  {
    id: 'serega',
    name: 'Serega',
    subjects: ['matematika', 'geometria', 'trigonometria', 'algebra', 'mat-analiz'],
    workingSchedule: createDefaultSchedule(),
  },
  {
    id: 'ivan',
    name: 'Ivan',
    subjects: ['trudy', 'fizra'],
    workingSchedule: createDefaultSchedule(),
  },
  {
    id: 'maria-ivanovna',
    name: 'Maria Ivanovna',
    subjects: ['istoria-ukrainy', 'istoria-vsesvitu'],
    workingSchedule: createDefaultSchedule(),
  },
  {
    id: 'kirill',
    name: 'Kirill',
    subjects: ['matematika', 'mat-analiz', 'algebra'],
    workingSchedule: createDefaultSchedule(),
  },
  {
    id: 'anton',
    name: 'Anton',
    subjects: ['geometria', 'trigonometria'],
    workingSchedule: createDefaultSchedule(),
  },
  {
    id: 'evkakiy',
    name: 'Evkakiy',
    subjects: ['dpu', 'trudy'],
    workingSchedule: createDefaultSchedule(),
  },
  {
    id: 'viktor',
    name: 'Viktor',
    subjects: ['biologia', 'geografia'],
    workingSchedule: createDefaultSchedule(),
  },
  {
    id: 'elena-petrovna',
    name: 'Elena Petrovna',
    subjects: ['malyuvannya', 'muzyka'],
    workingSchedule: createDefaultSchedule(),
  }
];

const dayLessons: SchoolDaySchedule = [
  {
    teacher: 'ivan',
    subject: {
      id: 'fizra',
      name: 'Physical culture'
    },
    classRoomNumber: 101,
    isValid: true,
  },
  {
    teacher: 'serega',
    subject: {
      id: 'matematika',
      name: 'Math'
    },
    classRoomNumber: 102,
    isValid: true,
  },
  {
    teacher: 'serega',
    subject: {
      id: 'matematika',
      name: 'Math'
    },
    classRoomNumber: 102,
    isValid: true,
  },
  {
    teacher: 'vasya',
    subject: {
      id: 'ukr-mova',
      name: 'Ukrainian language'
    },
    classRoomNumber: 103,
    isValid: true,
  },
  {
    teacher: 'vasya',
    subject: {
      id: 'ukr-mova',
      name: 'Ukrainian language'
    },
    classRoomNumber: 103,
    isValid: true,
  },
  null,
  null
];

const emptyDayLessons: SchoolDaySchedule = [null, null, null, null, null, null, null];

export const classWeekTestSchedule: SchoolWeekSchedule = [
  dayLessons, emptyDayLessons, emptyDayLessons, emptyDayLessons, emptyDayLessons
];

export const schedule: Schedule = {
  '5A': classWeekTestSchedule,
  '5B': classWeekTestSchedule,
  '5C': classWeekTestSchedule,
  '6A': classWeekTestSchedule,
  '6B': classWeekTestSchedule,
  '6C': classWeekTestSchedule,
  '7A': classWeekTestSchedule,
  '7B': classWeekTestSchedule,
  '7C': classWeekTestSchedule,
  '8A': classWeekTestSchedule,
  '8B': classWeekTestSchedule,
  '8C': classWeekTestSchedule,
  '9A': classWeekTestSchedule,
  '9B': classWeekTestSchedule,
  '9C': classWeekTestSchedule,
  '10A': classWeekTestSchedule,
  '10B': classWeekTestSchedule,
  '10C': classWeekTestSchedule,
};
