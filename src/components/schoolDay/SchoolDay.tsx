import { Lesson as LessonSlot } from '../lesson';
import { SchoolDaySchedule } from "commonTypes/dataTypes";
import styles from './SchoolDay.module.css';
import clsx from "clsx";
import { times } from "../../lib";

type SchoolDayProps = {
  lessons: SchoolDaySchedule;
  backgroundColor: 'green' | 'blue';
  className?: string;
};

const staticLessonsSequence = times(7);

export const SchoolDay = ({ lessons, backgroundColor }: SchoolDayProps) => {
    return (
      <div className={clsx(styles.schoolDay, `day-${backgroundColor}`)}>
        {
          staticLessonsSequence.map((_, index) => {
            if (lessons[index]) {
              return (
                <LessonSlot
                  classRoomNumber={lessons[index]?.classRoomNumber.toString()}
                  subjectName={lessons[index]?.subject.name}
                  index={index}
                />
              );
            }
            return <LessonSlot index={index} />;
          })
        }

        {/*{lessons.map((item, index) => {*/}
        {/*  if (item?.subject) {*/}
        {/*    return (*/}
        {/*      <LessonSlot*/}
        {/*        classRoomNumber={item.classRoomNumber.toString()}*/}
        {/*        index={index}*/}
        {/*        subjectName={item.subject.name}*/}
        {/*      />*/}
        {/*    );*/}
        {/*  }*/}
        {/*  return <LessonSlot index={index} />;*/}
        {/*})}*/}
      </div>
    );
  }
;
