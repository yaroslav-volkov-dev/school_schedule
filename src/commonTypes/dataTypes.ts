import { FixedLengthArray, PossibleSubjectsCount } from './utility';

type Days =
  'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday';

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
  [timeslot: TimeSlots]: TeacherWorkStatus;
}

type Teacher<TSubjCount extends PossibleSubjectsCount> = {
  id: string;
  name: string;
  subjects: FixedLengthArray<string, TSubjCount>;
};

type Lesson = {
  id: string;
  name: string;
  isDivisible: boolean;
}

export type {
  Teacher
};

