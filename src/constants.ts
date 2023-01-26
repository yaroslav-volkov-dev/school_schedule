import { nanoid } from 'nanoid';
import {
  SchoolWeekSchedule,
  Subject,
  Teacher,
  TeacherWorkingSchedule,
  WorkingDaySchedule
} from './commonTypes/dataTypes';

export const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'] as const;

export const classRooms = [
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
  201, 202, 203, 204, 205, 206, 207, 208, 209, 210,
  301, 302, 303, 304, 305, 306, 307, 308, 309, 310,
  401, 402, 403, 404, 405, 406, 407, 408, 409, 410,
];

export const defaultWorkingDaySchedule: WorkingDaySchedule = {
  '08:30-09:15': 'free',
  '09:30-10:15': 'free',
  '10:30-11:15': 'free',
  '11:30-12:15': 'free',
  '12:30-13:15': 'free',
  '13:30-14:15': 'free',
  '14:30-15:15': 'free',
};

const createDefaultSchedule = (): TeacherWorkingSchedule => {
  return days.reduce<TeacherWorkingSchedule>((acc, day) => {
    acc[day] = defaultWorkingDaySchedule;
    return acc;
  }, {} as TeacherWorkingSchedule);
};

const getPossibleSubjects = (teachers: Teacher[]) => {
  const uniqueSubjectNames = new Set;

  return teachers.reduce<Subject[]>((acc, { subjects }) => {
    subjects.forEach((subject) => {
      if (!uniqueSubjectNames.has(subject.name)) {
        acc = [...acc, subject];
      }
      uniqueSubjectNames.add(subject.name);
    });
    return acc;
  }, []);
};

export const teachers: Teacher[] = [
  {
    id: nanoid(),
    name: 'Vasya',
    subjects: [
      {
        id: nanoid(),
        name: 'Ukrainian Language',
        isDivisible: false
      },
      {
        id: nanoid(),
        name: 'Ukrainian Literature',
        isDivisible: false,
      }],
    workingSchedule: createDefaultSchedule(),
  },
  {
    id: nanoid(),
    name: 'Serega',
    subjects: [
      {
        id: nanoid(),
        name: 'Math',
        isDivisible: false,
      },
      {
        id: nanoid(),
        name: 'Mathematical Analysis',
        isDivisible: false,
      },
      {
        id: nanoid(),
        name: 'Trigonometry',
        isDivisible: false,
      },
      {
        id: nanoid(),
        name: 'Geometry',
        isDivisible: false,
      },
      {
        id: nanoid(),
        name: 'Algebra',
        isDivisible: false,
      }
    ],
    workingSchedule: createDefaultSchedule(),
  },
  {
    id: nanoid(),
    name: 'Ivan',
    subjects: [
      {
        id: nanoid(),
        name: 'Labor education',
        isDivisible: true,
      },
      {
        id: nanoid(),
        name: 'Physical Culture',
        isDivisible: false,
      }
    ],
    workingSchedule: createDefaultSchedule(),
  },
  {
    id: nanoid(),
    name: 'Dima',
    subjects: [
      {
        id: nanoid(),
        name: 'Labor education',
        isDivisible: true,
      },
      {
        id: nanoid(),
        name: 'Computer science',
        isDivisible: true,
      },
    ],
    workingSchedule: createDefaultSchedule(),
  }
];

const subjects = getPossibleSubjects(teachers);

export const schedule: SchoolWeekSchedule = {
  monday: {
    '5A': {
      lessons: [
        {
          teacher: teachers[0],
          classRoomNumber: 101,
          subject: subjects[0],
          timeslot: '08:30-09:15',
        },
        {
          teacher: teachers[1],
          classRoomNumber: 102,
          subject: subjects[1],
          timeslot: '09:30-10:15'
        }
      ]
    },
    '5B': {
      lessons: [
        {
          teacher: teachers[0],
          classRoomNumber: 103,
          subject: subjects[0],
          timeslot: '08:30-09:15',
        },
        {
          teacher: teachers[1],
          classRoomNumber: 104,
          subject: subjects[1],
          timeslot: '09:30-10:15'
        }
      ]
    },
    '5C': {
      lessons: [
        {
          teacher: teachers[0],
          classRoomNumber: 105,
          subject: subjects[0],
          timeslot: '08:30-09:15',
        },
        {
          teacher: teachers[1],
          classRoomNumber: 106,
          subject: subjects[1],
          timeslot: '09:30-10:15'
        }
      ]
    }
  },
  tuesday: {

  }
};
