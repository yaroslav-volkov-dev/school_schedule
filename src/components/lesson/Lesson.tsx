import { ReactNode } from 'react';
import styles from './Lesson.module.css';

type LessonProps = {
  classRoomNumber?: string;
  children?: ReactNode;
  className?: string;
}

export const Lesson = ({children, className, classRoomNumber = '-'}: LessonProps) => {
  return (
    <div className={styles.lesson}>
      <div className={styles.lessonName}>
        {children}
      </div>
      <div className={styles.classRoomNumber}>{classRoomNumber}</div>
    </div>
  );
};
