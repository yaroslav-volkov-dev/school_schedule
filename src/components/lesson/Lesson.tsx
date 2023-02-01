import styles from './Lesson.module.css';

type LessonProps = {
  index: number;
  subjectName?: string;
  classRoomNumber?: string;
}

export const Lesson = ({ index, subjectName = '', classRoomNumber = '-' }: LessonProps) => {
  return (
    <div className={styles.lesson}>
      <div className={styles.lessonName}>
        <span className={styles.lessonNumber}>{`${index + 1}.`}</span>
        <span>{subjectName}</span>
      </div>
      <div className={styles.classRoomNumber}>{classRoomNumber}</div>
    </div>
  );
};
