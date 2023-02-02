import { classes, days } from '../constants';
import { FixedLengthArray } from './utility';

type Classes = typeof classes[number];

type Days = typeof days[number]

type TimeSlots =
  '08:30-09:15'
  | '09:30-10:15'
  | '10:30-11:15'
  | '11:30-12:15'
  | '12:30-13:15'
  | '13:30-14:15'
  | '14:30-15:15';

type TeacherWorkStatus = 'free' | 'busy';

const a = [['free', 'free', 'free', 'free', 'free', 'free', 'free',], ['']];

type TeacherWorkingSchedule = {
  [day in Days]: WorkingDaySchedule;
}

type WorkingDaySchedule = FixedLengthArray<TeacherWorkStatus, 7>;

type Subject = {
  id: string;
  name: string;
}

type Teacher = {
  id: string;
  name: string;
  subjects: string[];
  workingSchedule: TeacherWorkingSchedule;
};

type Lesson = {
  subject: Subject;
  teacher: string;
  classRoomNumber: number;
  isValid: boolean;
} | null;

type SchoolDaySchedule = Lesson[];

type SchoolWeekSchedule = FixedLengthArray<SchoolDaySchedule, 5>;

type Schedule = {
  [_class in Classes]: SchoolWeekSchedule;
};

export type {
  Teacher,
  WorkingDaySchedule,
  Days,
  TeacherWorkingSchedule,
  Subject,
  Lesson,
  SchoolWeekSchedule,
  Schedule,
  SchoolDaySchedule
};
