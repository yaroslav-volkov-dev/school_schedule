import { days } from '../constants';

type Classes =
  '5A' | '5B' | '5C' |
  '6A' | '6B' | '6C' |
  '7A' | '7B' | '7C' |
  '8A' | '8B' | '8C' |
  '9A' | '9B' | '9C' |
  '10A' | '10B' | '10C';

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

type WorkingDaySchedule = {
  [timeslot in TimeSlots]: TeacherWorkStatus;
}

type TeacherWorkingSchedule = {
  [day in Days]: WorkingDaySchedule;
}

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
  timeslot: TimeSlots;
  //id for subject
  subject: Subject | Subject[];
  //id of teacher
  teacher: Teacher;
  classRoomNumber: number;
  isValid: boolean;
} | null;


//should have vertical structure
type ClassDaySchedule = Lesson[];

type SchoolDaySchedule = {
  [_class in Classes]: ClassDaySchedule;
}

export type {
  Teacher,
  WorkingDaySchedule,
  Days,
  TeacherWorkingSchedule,
  Subject,
};
