import { Lesson as LessonSlot } from '../lesson';
import type { Lesson } from 'commonTypes/dataTypes';

type SchoolDayProps = {
  lessons: Lesson[]
};

export const SchoolDay = ({ lessons }: SchoolDayProps) => {
  return (
    <div className={'border border-black rounded shrink-0 flex flex-col gap-y-2 p-1'}>
      {lessons.map((item) => {
        if (item?.subject) {
          return (<LessonSlot
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
