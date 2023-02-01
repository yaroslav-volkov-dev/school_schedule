import { Lesson as LessonSlot } from '../lesson';
import type { Lesson } from 'commonTypes/dataTypes';
import styles from './SchoolDay.module.css';

type SchoolDayProps = {
  lessons: Lesson[];
  isLastClass: boolean;
  className?: string;
};

export const SchoolDay = ({ lessons, isLastClass }: SchoolDayProps) => {
  return (
    <div className={`${styles.schoolDay} ${isLastClass ? styles.lastClass : ''}`}>
      {lessons.map((item) => {
        if (item?.subject) {
          return (
            <LessonSlot
              classRoomNumber={item.classRoomNumber.toString()}
              className={'first:rounded-t last:rounded-b'}>
              {item.subject}
            </LessonSlot>
          );
        }
        return <LessonSlot />;
      })}
    </div>
  );
};
